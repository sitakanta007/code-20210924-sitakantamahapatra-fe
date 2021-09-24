import React, { Component } from 'react';
import { gql  } from 'apollo-boost';
import { graphql } from 'react-apollo';
import CarBlock from '../CarSection/CarBlock';

const getAllCars = gql`
{
  carList {
    id,
    brand,
    model,
    price
  }
}`

class CarList extends Component {
    constructor(props) {
        super(props);
    }

    displayCars() {
        var data = this.props.data;
        if(data.loading) {
          return (<div> Loading... </div>);
        } else {
          return data.carList.map( car => {
            return (
              <CarBlock key={ car.id } carBlock={ car }/>
            );
          })
        }
    };

    displayCarCount() {
        var data = this.props.data;
        if(!data.loading) {
            return (<h1>Total Cars - { this.props.data.carList.length }</h1>)
        }
    }

    render() {
        return <div id="centerPan"><div id="featured">
                { this.displayCarCount()}
                { this.displayCars() } 
            </div>
        </div>
    }
} 

// Inject graphql query to the component
export default graphql(getAllCars)(CarList);