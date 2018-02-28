// Workflow for processing and responding to post requests.

export default class Responder {
  constructor () {
    this.subMessage = process.env.SUB_MESSAGE || '+repost'
  }
}
