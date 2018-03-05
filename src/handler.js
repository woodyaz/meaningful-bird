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
    // check database
    const postId = change.value.post_id
    if (database.findById(postId)) {
            
    }
    // if not there, save it
    // call talk
    // else
    // save it
    // call talk 
  }

  edit () {

  }
}
