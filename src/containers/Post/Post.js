import React from 'react'
import { withRouter } from 'react-router-dom'

import PostItem from './../../components/PostItem/PostItem'

class Post extends React.Component {
  render() {
    return (
      <div className="post-page">
        <div className="row">
          <div className="col-md-8">
            <PostItem/>
          </div>
          <div className="col-md-4">
            Banner Post right
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Post)