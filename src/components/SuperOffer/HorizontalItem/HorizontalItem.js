import React from 'react';

import './HorizontalItem.css';

class HorizontalItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="horizontal-item">
                <img className="p-image" src="http://7uptheme.com/wordpress/fruitshop/wp-content/uploads/2017/04/ad4.jpg" alt="super offer"/>
            </div>
        )
    }
}

export default HorizontalItem;