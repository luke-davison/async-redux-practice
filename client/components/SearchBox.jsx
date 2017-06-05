import React from 'react'
import {connect} from 'react-redux'
import {updateSubredditName} from '../actions'

function SearchBox (props) {
  return (
    <input name='SearchBox' onChange={searchBoxChange} placeholder='newzealand' />
  )
  function searchBoxChange (e) {
    props.updateSubredditName(e.target.value)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateSubredditName: name => {
      const action = updateSubredditName(name)
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBox)
