import React, { Component } from 'react';
import Nav from './Nav';
import { foodItems } from './../mockData';
import {Link} from 'react-router-dom';


export default class Market extends Component {
  render() {
    let foodList = foodItems.map(item => {
      return (
        <div key={item.id}>
          <img src={item.url} alt="" />
          <Link to={`/market/details/${item.id}`}>
            <button>See More</button>
          </Link>
          <hr />
        </div>
      )
    })
    return (
      <div>
        <Nav />
        <h1>Margaret's Market</h1>
        {foodList}
      </div>
    )
  }
}
