import React from 'react';

import ProductItem from './../ProductItem/ProductItem';

import './ProductGrid.css';

class ProductGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
      return (
        <div className="product-grid">
          <h2 className="title text-center">
            Best Sellers Products
          </h2>
          <ul className="text-center product-category">
            <li className="active">
              <a href="#">All</a>
            </li>
            <li>
            <a href="#">Product1</a>
            </li>
            <li>
            <a href="#">Product2</a>
            </li>
            <li>
            <a href="#">Product3</a>
            </li>
          </ul>
          <div className="row">
						<div className="col-md-3">
							<ProductItem/>
						</div>
						<div className="col-md-3">
							<ProductItem/>
						</div>
						<div className="col-md-3">
							<ProductItem/>
						</div>
            <div className="col-md-3">
							<ProductItem/>
						</div>
          </div>
        </div>
      )
    }
}

export default ProductGrid