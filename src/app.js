import Express from 'express'
import BodyParser from 'body-parser'
import Morgan from 'morgan'
import Middleware from './middleware'
// import Handler from './handler'

export default class App extends Express {
  constructor () {
    super()
    const middleware = new Middleware()
    this.use(Morgan('combined'))
    this.use(BodyParser.json())
    this.use(middleware.hubVerify)
  }
}
