import cache from 'memory-cache'

export default class Database {
  save (postId, info) {
    cache.put(postId, info)
    return (`${postId} saved.`)
  }

  findById (postId) {
    return cache.get(postId)
  }

  dropById (postId) {
    return cache.del(postId)
  }
}
