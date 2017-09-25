import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import {Helmet} from 'react-helmet'

import Slider from './../../components/Slider/Slider'

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
							<Slider/>
						</div>
						<div className="col-md-4 col-lg-4">

						</div>
					</div>
				</div>
		  </div>
	  )
  }
}

export default withRouter(Home)