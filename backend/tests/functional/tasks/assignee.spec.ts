import User from '#models/user'
import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'

/**
 * Lo que cada tarea muestra de su responsable. Cubre los tres scenarios del
 * requisito «Lo que cada tarea muestra de su responsable» de
 * `openspec/specs/tasks/spec.md`: responsable identificable, sin filtrar
 * datos de cuenta, y responsable sin nombre.
 */
test.group('Tasks | responsable', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())

  async function sesion(client: any, fullName: string | null = 'Ada Lovelace') {
    await User.create({
      fullName,
      email: 'ada@example.com',
      password: 'secreto123',
    })

    const response = await client
      .post('/api/v1/auth/login')
      .json({ email: 'ada@example.com', password: 'secreto123' })

    return response.body().data.token as string
  }

  test('el assignee trae el nombre y las iniciales del responsable', async ({
    client,
    assert,
  }) => {
    const token = await sesion(client)

    const response = await client
      .post('/api/v1/tasks')
      .header('Authorization', `Bearer ${token}`)
      .json({ title: 'Revisar el informe' })

    response.assertStatus(201)

    const { assignee } = response.body().data
    assert.equal(assignee.fullName, 'Ada Lovelace')
    assert.equal(assignee.initials, 'AL')
  })

  test('el assignee no incluye el email ni datos de acceso', async ({ client, assert }) => {
    const token = await sesion(client)

    const created = await client
      .post('/api/v1/tasks')
      .header('Authorization', `Bearer ${token}`)
      .json({ title: 'Revisar el informe' })

    created.assertStatus(201)
    const taskId = created.body().data.id

    const lista = await client.get('/api/v1/tasks').header('Authorization', `Bearer ${token}`)
    lista.assertStatus(200)

    const suelta = await client
      .get(`/api/v1/tasks/${taskId}`)
      .header('Authorization', `Bearer ${token}`)
      .qs({ today: '2026-10-09' })
    suelta.assertStatus(200)

    for (const assignee of [lista.body().data[0].assignee, suelta.body().data.assignee]) {
      assert.notProperty(assignee, 'email')
      assert.notProperty(assignee, 'password')
      assert.notInclude(JSON.stringify(assignee), 'ada@example.com')
      assert.notInclude(JSON.stringify(assignee), 'secreto123')
    }
  })

  test('sin nombre el assignee llega con nombre nulo e iniciales', async ({
    client,
    assert,
  }) => {
    const token = await sesion(client, null)

    const response = await client
      .post('/api/v1/tasks')
      .header('Authorization', `Bearer ${token}`)
      .json({ title: 'Revisar el informe' })

    response.assertStatus(201)

    const { assignee } = response.body().data
    assert.isNull(assignee.fullName)
    assert.equal(assignee.initials, 'AE')
  })
})
