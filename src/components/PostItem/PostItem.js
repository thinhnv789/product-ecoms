import React from 'react'

import './post_item.css'

class PostItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="post-item">
        <div className="row">
          <div className="col-md-5 col-lg-5 image-thumb">
            <a href="#">
              <img className="img img-responsive" alt='ttt' src="./test.gif"/>
            </a>
          </div>
          <div className="col-md-7 col-lg-7 short-content">
            <a href="#">
              <h2 className="post-title">
                Cảnh sát bất lực, để hai tài xế đánh nhau giữa đường
              </h2>
            </a>
            <div className="metadata">
              <span className="author">
                <a href="#">
                  <i className="fa fa-user"/> Author
                </a>
              </span>
              <span className="devider"></span>
              <span className="publish-time">
                <a href="#">
                  <i className="fa fa-calendar"/> 24/09/2017
                </a>
              </span>
            </div>
            <p className="description">
            Chiếc xe Van lách lên và va quệt vào chiếc xe đặt camera hành trình, ngỡ rằng chiếc xe sẽ dừng...
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default PostItem