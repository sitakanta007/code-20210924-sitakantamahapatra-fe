import React, { Component } from 'react';
import { gql  } from 'apollo-boost';
import { graphql } from 'react-apollo';
import CarBlock from './CarBlock';

const getFeaturedCars = gql`
{
  carFeatured {
    id,
    brand,
    model,
    price
  }
}`

class FeaturedCars extends Component {
    constructor(props) {
      super(props);

    }

    displayCars() {
      var data = this.props.data;
      if(data.loading) {
        return (<div> Loading... </div>);
      } else {
        return data.carFeatured.map( car => {
          return (
            <CarBlock key={ car.id } carBlock={ car }/>
          );
        })
      }
    };

    render() {
        return <div id="centerPan">
            <div id="featured">
            <h2></h2>
            <p><span className="headline">Sed laoreet. Aenean. Phasellus porta.</span> 
            Fusce interdum. Maecenas eu elit sed nulla dignissim interdum. Sed laoreet. Aenean pede. </p>

            { this.displayCars() }

          </div>
        </div>
    }
} 

// Inject graphql query to the component
export default graphql(getFeaturedCars)(FeaturedCars);