import React, { Component } from 'react';

class CarBlock extends Component {
    render() {
        const detailsLink = "/car-details/"+this.props.carBlock.id;
        return <div className="fcar"> 
            <img src="images/img_cars.jpg" width="101" height="58" alt="" />
            <p>
                <span className="headline2">{ this.props.carBlock.brand } </span><br />
                <span className="model">Model: { this.props.carBlock.model }, </span><br/> 
                <span className="price">Price: { this.props.carBlock.price } Lakh </span><br/>
            </p>
            <div className="clear"></div>
        </div>
    }
} 

export default CarBlock;