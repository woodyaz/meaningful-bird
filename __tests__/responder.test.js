import Responder from '../src/responder'

describe(Responder, () => {
  it('sets sub message by env var', () => {
    process.env.SUB_MESSAGE = '+ninja'
    const responder = new Responder()
    expect(responder.subMessage).toBe('+ninja')
  })
})
