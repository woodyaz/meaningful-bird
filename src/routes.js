export default class Routes {
  // Return challenge string if set, otherwise send "ok"
  get (req, res) {
    if (req.query['hub.challenge']) {
      res.status(200).send(req.query['hub.challenge'])
    } else {
      res.status(200).send('ok')
    }
  }

  post (req, res) {
    if (req.body.entry) {
      // const handler = new Hander()
      // handler.validateKeyword(req.body)
    }
    res.status(200).send('ok')
  }
}
