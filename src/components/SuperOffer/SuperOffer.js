import React from 'react';

import VerticalItem from './VerticalItem/VerticalItem';
import HorizontalItem from './HorizontalItem/HorizontalItem';

import './SuperOffer.css';

class SuperOffer extends React.Component {
  constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="super-offer">
				<VerticalItem/>
				<VerticalItem/>
			</div>
		)
	}
}

export default SuperOffer;