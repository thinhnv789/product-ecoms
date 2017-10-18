import React from 'react';

import './VerticalItem.css';

class VerticalItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="vertical-item">
                <img className="p-image" src="http://media.thinhnv.net/images/slider/thumb/slide-1508246610815.jpg" alt=""/>
            </div>
        )
    }
}

export default VerticalItem;