import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import Slider from './../../components/Slider/Slider'

import './Home.css';

class  Home extends Component {
  render () {
	  return (
		  <div className="home-page">
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