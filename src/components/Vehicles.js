import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav'

export default class Vehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }
  componentDidMount() {
    let promise = axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    promise.then(res => {
      this.setState({ cars: res.data })
    })
  }
  render() {
    let carList = this.state.cars.map(car => {
      return <div>
        <p>Make: {car.make}</p>
        <p>Model: {car.model}</p>
        <button>Details for {car.make} {car.model}</button>
        <hr />
      </div>
    })
    return (
      <div>
        <Nav />
        <h1>Tucker's Used Cars</h1>
        {carList}
      </div>
    )
  }
}