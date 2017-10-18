import React from 'react';

import './ProductItem.css';

class ProductItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="product-item text-center">
                <div className="product-thumb">
                    <a className="product-thumb-link" href="#">
                        <img className="product-img" src="http://7uptheme.com/wordpress/fruitshop/wp-content/uploads/2017/04/fruit_15-768x768.jpg"/>
                    </a>
                    <a data-product-id="184" href="#" className="quickview-link">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="product-info">
                    <h3 className="product-title">
                        <a href="#">Green cabbage</a>
                    </h3>
                    <div className="product-price">
                        <span className="price">
                            <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">£</span>
                                60.00
                            </span>
                        </span>
                    </div>
                    <div className="product-rate ">
                        <div className="product-rating" style={{width: '70%'}}></div>
                    </div>                                
                    <div className="product-extra-link">
                        <a href="#" className="wishlist-link">
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                            <span>Wishlist</span>
                        </a>
                        <a rel="nofollow" href="#" className="button add_to_cart_button">
                            Add to cart
                        </a>
                        <a href="#" className="mb-compare product-compare compare compare-link" data-product_id="184">
                            <i className="fa fa-compress" aria-hidden="true"></i>
                            <span>Compare</span>
                        </a>                                
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem