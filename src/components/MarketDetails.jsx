import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {foodItems} from '../mockData'

class MarketDetails extends Component {

    render() {
        let singleItem = foodItems.filter((item) => item.id === +this.props.match.params.id)
        return (
            <div>
                <Link to='/'>Back</Link>
                <h1>Market Details</h1>
                <p>You clicked on an item with an Id of : {this.props.match.params.id}</p>
                <p>Item: {singleItem[0].name}</p>
                <p>Price: {singleItem[0].price}</p>
                <img src={singleItem[0].url} alt={singleItem[0].name}/>
            </div>
        )
    }
}

export default MarketDetails;