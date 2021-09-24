import React, { Component } from 'react';

class ServiceBlock extends Component {
    render() {
        return <div className="serv_item"> 
            <p><a href="#"> { this.props.name } </a><br />
            sed nulla dignissim interdum. Sed laoreet. Aenean pede. Phasellus </p>
            <div className="clear"></div>
        </div>
    }
} 

export default ServiceBlock;