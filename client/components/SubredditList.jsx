import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Post from './Post'

const Subreddit = ({subreddits}) => (
  <div>
    {subreddits.map((post, i) =>
      <Post
        key={i}
        title={post.title}
        url={`http://www.reddit.com${post.permalink}`}
        thumbnail={post.thumbnail !== 'self' && post.thumbnail !== 'nsfw' ? post.thumbnail : ''}
        />
    )}
  </div>
)

Subreddit.propTypes = {
  subreddits: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
