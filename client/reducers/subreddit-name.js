import {ADD_SUBREDDIT} from '../actions'

function subredditName (state = 'newzealand', action) {
  switch (action.type) {
    case ADD_SUBREDDIT:
      return action.name

    default:
      return state
  }
}

export default subredditName
