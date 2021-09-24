import React, { Component } from 'react';
import ServiceBlock from './ServiceBlock';

class Service extends Component {
    render() {
        return <div id="rightPan">
            <div id="services">
            <h2></h2>
            <ServiceBlock name="Car Insurance"/>
            <ServiceBlock name="Health Insurance"/>
            <ServiceBlock name="Loan Against Car"/>
            <ServiceBlock name="Car Service"/>
            </div>
        </div>
    }
} 

export default Service;