import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import subredditName from './subreddit-name'
import parameters from './parameters'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  subredditName,
  parameters
})
