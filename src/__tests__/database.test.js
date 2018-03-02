import Database from '../database'

describe('Database', () => {
  const database = new Database()
  const post = { url: 'someUrl' }
  describe('savePostInfo()', () => {
    it('saves post data', () => {
      expect(database.save('123', post)).toBe('123 saved.')
    })
  })
  describe('findById()', () => {
    it('gets post by Id', () => {
      database.save('234', post)
      expect(database.findById('234')).toBe(post)
    })
  })
})
