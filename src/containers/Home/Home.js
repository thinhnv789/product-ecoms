import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { homeActions } from './../../actions/home';

import CarouselSlider from './../../components/CarouselSlider/CarouselSlider'

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
						<div className="col-md-8 col-lg-8">
							<CarouselSlider
								sources={sliders}
							/>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							<p>
								Is this the only place you used JQuery? If so, I'd recommend ditching it for pure javascript. Everything you can do with JQuery you can also do with React and pure JavaScript, and it's not worth the overhead here.

								Here's a pure JavaScript version of your handleScroll function. Note that document height is notoriously annoying to compute, but I've taken the approach of this question (which just reproduces JQuery's implementation).
							</p>
							
						</div>
						<div className="col-md-4 col-lg-4">
							fsdfafa
						</div>
					</div>
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