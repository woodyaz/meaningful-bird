import Database from '../src/data'
const database = new Database()

describe(Database, () => {
  beforeAll(() => {
    database.reset(() => {
      console.log('Reset db')
    })
  })

  it('Writes a database file', () => {
    expect(database.db.path).toBe('posts.db')
  })

  describe(database.save, () => {
    it('Saves post.id and post url', () => {
      database.save('123', 'https://workplace.facebook.com')
      const result = database.findById('123')
      expect(result.val).toBe('https://workplace.facebook.com')
    })
  })
})
