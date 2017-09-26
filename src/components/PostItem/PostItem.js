import React from 'react'

import './post_item.css'

class PostItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { item } = this.props;

    return (
      <div className="post-item">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <a href={'/danh-muc/' + item.category.alias}>{item.category.categoryName}</a>
          </div>
          <div className="col-md-5 col-lg-5 image-thumb">
            <a href={`/tin-tuc/${item.alias}`}>
              <img className="img img-responsive" alt={item.title} src={item.imageUrl}/>
            </a>
          </div>
          <div className="col-md-7 col-lg-7 short-content">
            <a href={`/tin-tuc/${item.alias}`}>
              <h2 className="post-title">
                {item.title}
              </h2>
            </a>
            <div className="metadata">
              <span className="author">
                <a href="/author">
                  <i className="fa fa-user"/> Author
                </a>
              </span>
              <span className="devider"></span>
              <span className="publish-time">
                <a href={`/${item.publishTime}`}>
                  <i className="fa fa-calendar"/> 24/09/2017
                </a>
              </span>
            </div>
            <p className="description">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default PostItem