import Express from 'express'

export default class App extends Express {
  constructor () {
    super()
    this.get('/', (req, res) => {
      res.status(200).send('ok')
    })
  }
}
