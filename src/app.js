import Express from 'express'
import BodyParser from 'body-parser'
import Morgan from 'morgan'

export default class App extends Express {
  constructor () {
    super()
    this.use(Morgan('combined'))
    this.use(BodyParser.json())
    this.use((req, res, next) => {
      // Check that the verify_token matches
      if (req.method === 'GET') {
        if (req.query['hub.verify_token'] === process.env.VERIFY_TOKEN) {
          next()
        } else {
          res.status(403).send('Forbidden')
        }
      } else {
        next()
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

    this.post('/', (req, res) => {
      if (req.body.entry) {
        console.log(req.body.entry)
        res.status(200).send('ok')
      }
    })
  }
}
