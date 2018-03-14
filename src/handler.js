import Database from './database'
const database = new Database()

export default class Hander {
  post (body) {
    const change = body.entry[0].changes[0]
    switch (change.field) {
      case 'mention': {
        this.mention(change)
        break
      }
      case 'posts': {
        if (change.value.verb === 'edit') {
          this.edit(change)
        }
      }
    }
  }

  mention (change) {
    const postId = change.value.post_id
    if (database.findById(postId)) {
      database.dropById(postId)
      this.response('I\'m no longer watching this post.')
    } else {
      database.save(postId, change)
      this.response('I\'ll watch this post for changes.')
    }
  }

  response (message) {
    return message
  }

  edit () {
    // @TODO handle edit type.
  }
}
