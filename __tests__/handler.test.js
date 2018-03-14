import Handler from '../src/handler'
import mentionBody from '../__fixtures__/mention.json'
import editBody from '../__fixtures__/edit.json'
import database from '../src/database'

jest.genMockFromModule('../src/database')

describe('Handler', () => {
  const handler = new Handler()
  describe('post()', () => {
    it('calls hander.mention() on mention change', () => {
      handler.mention = jest.fn()
      handler.post(mentionBody)
      expect(handler.mention).toHaveBeenCalled()
    })
    it('calls handler.edit() on edit change', () => {
      handler.edit = jest.fn()
      handler.post(editBody)
      expect(handler.edit).toHaveBeenCalled()
    })
  })

  describe('mention()', () => {
    const change = mentionBody.entry[0].changes[0]
    const handler = new Handler()
    handler.response = jest.fn()
    it('calls response() with follow message', () => {
      handler.mention(change)
      expect(handler.response).toHaveBeenCalledWith('I\'ll watch this post for changes.')
    })
    it('stops follow the post if not found', () => {
      database.findById = jest.fn().mockReturnValue(false)
      database.dropById = jest.fn().mockReturnValue(true)
      handler.mention(change)
      expect(handler.response).toHaveBeenCalledWith('I\'m no longer watching this post.')
    })
  })
})
