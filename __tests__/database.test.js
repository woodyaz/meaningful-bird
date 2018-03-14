import Database from '../src/database'

describe('Database', () => {
  const database = new Database()
  const post = { url: 'someUrl' }
  describe('save()', () => {
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
  describe('dropById()', () => {
    it('drops post by Id', () => {
      database.save('234', post)
      expect(database.dropById('234')).toBe(true)
      expect(database.findById('234')).toBe(null)
    })
  })
})
