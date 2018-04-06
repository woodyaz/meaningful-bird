export default class Middleware {
  hubVerify (req, res, next) {
    if (req.method === 'GET') {
      if (req.query['hub.verify_token'] && req.query['hub.verify_token'] === process.env.VERIFY_TOKEN) {
        next()
      } else {
        res.status(403).send('Forbidden')
      }
    } else {
      next()
    }
  }
}
