import Express from 'express'

export default class App extends Express {
  constructor () {
    super()

    this.use((req, res, next) => {
      console.log(req.originalUrl)
      console.log(req.headers)
      // Check that the verify_token matches
      if (req.query['hub.verify_token'] === process.env.VERIFY_TOKEN) {
        next()
      } else {
        res.status(403).send('Forbidden')
      }
    })

    // Return challenge string if set, otherwise send "ok"
    this.get('/', (req, res) => {
      if (req.query['hub.challenge']) {
        res.status(200).send(req.query['hub.challenge'])
      } else {
        res.status(200).send('ok')
      }
    })
  }
}
