import {RECEIVE_POSTS, SORT_BY_TITLE, SORT_BY_DATE} from '../actions'

function subreddits (state = [], action) {
  let newState = [...state]
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
        .filter(post => !post.stickied)
        .map((post, key) => {
          post.postId = key
          return post
        })
    case SORT_BY_TITLE:
      switch (action.num) {
        case 1:
          return newState.sort((a, b) => {
            if (a.title < b.title) {
              return -1
            }
            return 1
          })
        case 2:
          return newState.sort((a, b) => {
            if (a.title < b.title) {
              return -1
            }
            return 1
          }).reverse()
        case 3:
          return newState.sort((a, b) => a.postId - b.postId)
      }
    case SORT_BY_DATE:
      console.log('this is happening')
      switch (action.num) {
        case 1:
          return newState.sort((a, b) => a.created_utc - b.created_utc)
        case 2:
          return newState.sort((a, b) => b.created_utc - a.created_utc)
        case 3:
          return newState.sort((a, b) => a.postId - b.postId)
        }
    default:
      return state
  }
}

export default subreddits
