import React from 'react';

import {
    badgeStyle
} from './Style';

class Tag extends React.Component {

    render() {

        const categoryItem = this.props.categoryItem;

        return(
            <span className="badge badge-pill badge-dark" style={badgeStyle}>{categoryItem}</span>
        );
    }
}

export default Tag;
