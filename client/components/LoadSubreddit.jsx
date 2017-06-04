import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

let LoadSubreddit = (props) => (
  <button
    onClick={() => props.fetchPosts(props.subredditName)}
    >Fetch Posts</button>
)

function mapStateToProps (state) {
  return {
    subredditName: state.subredditName
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPosts: name => {
      const action = fetchPosts(name)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadSubreddit)
