import React from 'react'
import PropTypes from 'prop-types'

const Post = ({title, url, thumbnail}) => (
  <div className='post'>
    <div className='thumbnail'>
      {thumbnail && <img src={thumbnail} />}
    </div>
    <div className='postTitle'>
      <a href={url}>
        {title}
      </a>
    </div>
  </div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Post
