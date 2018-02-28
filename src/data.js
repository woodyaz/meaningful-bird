// In-memory dataset provided by node-dirty - https://github.com/felixge/node-dirty
// I'd recommend using Redis/DynamoDB/PostgreSQL or something else in prod, but hey, you do you!
import Dirty from 'dirty'
import fs from 'fs'

export default class Database {
  constructor () {
    this.db = Dirty('posts.db')
  }

  reset (done) {
    fs.unlink(this.db.path)
    done()
  }

  save (postId, url) {
    this.db.set(postId, url)
  }

  findById (postId) {
    let result
    this.db.forEach((key, val) => {
      if (key === postId) {
        result = { key, val }
      }
    })
    return result
  }
}
