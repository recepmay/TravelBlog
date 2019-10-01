import React from 'react';
import banner from '../../bled3.jpg';
import { bannerImage, bannerContainer } from './Style';

class Banner extends React.Component {
    render() {
        return(
            <div style={bannerContainer}>
                <img src={banner} style={bannerImage} alt="logo" />
            </div>
        );
    }
}

export default Banner;
