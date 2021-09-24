import React, { Component } from 'react';
import FeaturedCars from '../CarSection/FeaturedCars';
import News from '../NewsSection/News';
import Welcome from '../Welcome';
import Service from '../ServiceSection/Service';

class Home extends Component {
    render() {
        return <div id="content">
            <div id="leftPan">
                <Welcome />
                <News />
            </div>
        
            <FeaturedCars />
            <Service />
            <div className="clear"></div>
        </div>
    }
} 

export default Home;