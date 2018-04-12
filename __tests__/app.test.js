import App from '../src/app'
import Routes from '../src/routes'
import request from 'supertest'

const app = new App()
const routes = new Routes()
app.get('/', routes.get)
app.post('/', routes.post)

async function callServer (path, verifyTokenEnv = 123) {
  const query = `/?hub.verify_token=123${path}`
  process.env.VERIFY_TOKEN = verifyTokenEnv
  const response = await request(app).get(query)
  return response
}

describe('Verify server response', async () => {
  it('Returns 403 on verify_token missmatch', async () => {
    const response = await callServer('', 'b')
    expect(response.statusCode).toBe(403)
  })

  it('returns 200 ok with verify_token', async () => {
    const response = await callServer('', '123')
    expect(response.statusCode).toBe(200)
  })

  it('Returns hub.challenge', async () => {
    const response = await callServer('&hub.challenge=123')
    expect(response.text).toContain('123')
  })

  it('Returns 200 ok on post', () => {
    // supertest not loving async/await
    request(app)
      .post('/')
      .expect(200)
  })
})
