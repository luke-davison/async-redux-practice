import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const ADD_SUBREDDIT = 'ADD_SUBREDDIT'
export const SORT_BY_TITLE = 'SORT_BY_TITLE'
export const SORT_BY_DATE = 'SORT_BY_DATE'
export const FILTER = 'FILTER'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function updateSubredditName (name) {
  return {
    type: ADD_SUBREDDIT,
    name: name
  }
}

export function sortByDate (num) {
  return {
    type: SORT_BY_DATE,
    num
  }
}

export function sortByTitle (num) {
  return {
    type: SORT_BY_TITLE,
    num
  }
}

export function filterByString (filter) {
  return {
    type: FILTER,
    filter
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    request
      .get(`/api/reddit/subreddit/${subreddit}`)
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
          return
        }
        if (res.body.length === 0) {
          dispatch(showError('No posts found in that subreddit'))
          return
        }
        console.log(res.body)
        dispatch(receivePosts(res.body))
      })
  }
}
