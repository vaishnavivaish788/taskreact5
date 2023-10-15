import React, { Component } from 'react';
import "./vas.css";
class Rev extends Component {
    constructor() {
    super();
    this.state = {
        birthDate: '',
        age: null,
    };
}
    calculateAge = () => {
    const birthDate = new Date(this.state.birthDate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    const age = Math.floor(ageInYears);
    this.setState({ age });
    };
    handleInputChange = (e) => {
    this.setState({ birthDate: e.target.value });
    };
    render() {
    return (
        <div class="vas">
        <h1>Age Calculator</h1>
        <h4>Enter your age</h4>
        <input
            type="date"
            value={this.state.birthDate}
            onChange={this.handleInputChange}
        /><br></br><br></br>
        <button onClick={this.calculateAge}>Calculate Age</button>
        {this.state.age !== null && (
            <p>Your age is: {this.state.age} years old.</p>
        )}
        </div>
    );
    }
}
export default Rev;