import Handler from '../handler'
const comment = require('../__fixtures__/comment_change.json')

describe('Handler', () => {
  const handler = new Handler()
  it('sets keyword by env var', () => {
    process.env.KEYWORD = 'follow'
    const wthEnv = new Handler()
    expect(wthEnv.keyword).toBe('+follow')
  })

  it('has default keyword', () => {
    delete process.env.SUB_KEYWORD
    expect(handler.keyword).toBe('+mb')
  })

  describe('validateKeyword()', () => {
    it('calls router if keyword matches', () => {
      handler.router = jest.fn()
      handler.validateKeyword(comment)
      expect(handler.router).toBeCalled()
    })
  })

  describe('router()', () => {
    it('calls database.save on comment', () => {
      const handler = new Handler() // @TODO find out why unmock doesn't work here.
      handler.keyword = '+mb'
      const change = comment.entry[0].changes[0]
      expect(handler.router(change)).toBe(true)
    })
  })
})
