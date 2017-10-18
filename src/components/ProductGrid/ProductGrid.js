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
           <div className="row">
						<div className="col-md-4">
							<ProductItem/>
						</div>
						<div className="col-md-4">
							<ProductItem/>
						</div>
						<div className="col-md-4">
							<ProductItem/>
						</div>
           </div>
        </div>
      )
    }
}

export default ProductGrid