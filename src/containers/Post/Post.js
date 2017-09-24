import React from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { postActions } from './../../actions/post';

import PostItem from './../../components/PostItem/PostItem'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() {
    const { postActions } = this.props;

    // Get all post from sever
    postActions.getPostList()
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="post-page">
        <div className="row">
          <div className="col-md-8">
            {
              posts && posts.map((item, index) => {
                return (
                  <PostItem
                    key={index}
                    item={item}
                  />
                )
              })
            }
          </div>
          <div className="col-md-4">
            Banner Post right
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    postActions: bindActionCreators(postActions, dispatch),
  }
};

Post = connect(mapStateToProps, mapDispatchToProps)(Post);
export default withRouter(Post)