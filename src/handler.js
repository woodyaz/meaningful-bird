import Database from './database'
const database = new Database()

export default class Hander {
  constructor () {
    this.keyword = '+' + (process.env.KEYWORD || 'mb')
  }

  validateKeyword (data) {
    const change = data.entry[0].changes[0]
    if (change.value.message === this.keyword) {
      this.router(change)
    }
  }

  router (change) {
    switch (change.field) {
      case 'comments': {
        if (change.value.message === this.keyword) {
          database.save(change.value.post_id, change.value)
          return true
        }
        break
      }
    }
  }
}
