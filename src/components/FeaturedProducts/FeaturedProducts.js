import React from 'react';

import './FeaturedProducts.css';

class FeaturedProducts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="featured-products">
                <h2 className="title text-center">
                    Featured Products
                </h2>
                <div className="row">
                    <div className="col-md-5">
                        <div className="product-thumb">
                            <a className="product-thumb-link">
                                <img className="product-image"
                                    src="http://7uptheme.com/wordpress/fruitshop/wp-content/uploads/2017/04/fruit_16-400x400.jpg"
                                    alt="Sanr pham noi bat"    
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="product-info">
                            <h3 claclassNamess="product-title">
                                <a href="#">
                                    Green grape clipart
                                </a>
                            </h3>
                            <div className="product-price">
                                <span className="price">
                                    <del>
                                        <span className="woocommerce-Price-amount amount">
                                            <span className="woocommerce-Price-currencySymbol">
                                                £
                                            </span>312.00
                                        </span>
                                    </del>
                                    <ins>
                                        <span className="woocommerce-Price-amount amount">
                                            <span className="woocommerce-Price-currencySymbol">
                                                £
                                            </span>234.00
                                        </span>
                                    </ins>
                                </span>
                            </div>
                            <div className="product-rate">
                                <div className="product-rating" style={{width: '70%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeaturedProducts;