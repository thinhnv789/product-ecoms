import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import {Helmet} from 'react-helmet'

import CarouselSlider from './../../components/CarouselSlider/CarouselSlider'

import './Home.css';

class  Home extends Component {
  render () {
	  return (
		  <div className="home-page">
				<Helmet>
          <title>Trang chu</title>
          <link rel="canonical" href="http://dev.thinhnv.net" />
        </Helmet>
				
			  <div className="container-fluid">
					<div className="row">
						<div className="col-md-8 col-lg-8">
							<CarouselSlider/>
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

export default withRouter(Home)