import React, {Component} from 'react';
import axios from 'axios';

class VehicleDetails extends Component {
    constructor() {
        super();
        this.state={
            car: {}
        }
    }

    componentDidMount() {
        let promise = axios.get(`https://joes-autos.herokuapp.com/api/vehicles/${this.props.match.params.id}`)
        promise.then(res => {
            console.log(res)
            this.setState({
                car: res.data[0]
            })
        })
    }

    render(){
        let {car} = this.state;
        return (
            <div>
            <h1>Vehicle Details</h1>
            <p>Make: {car.make}</p>
            <p>Model: {car.model}</p>
            <p>Price: {car.price}</p>
            <p>Year: {car.year}</p>
            <p>Color: {car.color}</p>
            </div>
        )
    }
}

export default VehicleDetails