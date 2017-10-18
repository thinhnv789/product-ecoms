import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { homeActions } from './../../actions/home';

import CarouselSlider from './../../components/CarouselSlider/CarouselSlider';
import SuperOffer from './../../components/SuperOffer/SuperOffer';
import ProductGrid from './../../components/ProductGrid/ProductGrid';

import './Home.css';

class  Home extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	componentWillMount() {
		const { homeActions } = this.props;
		
		// Get all sliders
		homeActions.getSliders()
	}

  render () {
		const { sliders } = this.props;

	  return (
		  <div className="home-page">
				<Helmet>
          <title>Trang chu</title>
          <link rel="canonical" href="http://dev.thinhnv.net" />
        </Helmet>
				
			  <div className="container-fluid">
					<div className="row">
						<div className="col-md-8 col-lg-8 col-sm-8">
							<CarouselSlider
								sources={sliders}
							/>
						</div>
						<div className="col-md-4 col-lg-4 col-sm-4">
							<SuperOffer/>	
						</div>
					</div>
				</div>
				<div className="container">
					<ProductGrid/>
				</div>
		  </div>
	  )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sliders: state.sliders
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch),
  }
};

Home = connect(mapStateToProps, mapDispatchToProps)(Home);
export default withRouter(Home)