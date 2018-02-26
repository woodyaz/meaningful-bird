import App from '../src/app'
const request = require('supertest')
const app = new App()

describe('Test the web calls', () => {
  test('GET / returns 200 ok', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })
})
