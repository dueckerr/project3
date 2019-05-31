import React, { Component } from 'react';
// import axios from 'axios';
import API from "../../utils/API";

class AddParts extends Component {
    
    state = {
        //parts
        Valve: 0,
        Seat: 0,
        DRing: 0,
        Packing: 0,
        Plunger: 0
    }

    handleValveChange = (e)  => {
        this.setState({Valve:this.state.Valve})
    }

    handleFormSubmit = (e) => {
        (e).preventDefault();
        console.log(this.state)
        //   API.EditStock({
        //     Valve: this.state.Valve,
        //     Seat: this.state.Seat,
        //     DRing: this.state.DRing
        //   })
        //     .then(res => this.loadBooks())
        //     .catch(err => console.log(err));
        
      };

    render () {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                Valves:  -
                <input type="number" name="name" onChange = {this.handleValveChange}/>
                <br/>
                Seats:   -
                <input type="number" name="name" onChange = {this.handleValveChange} />
                <br/>
                D-Rings: -
                <input type="number" name="name" onChange = {this.handleValveChange} />
                <br/>
                Packing: -
                <input type="number" name="name" onChange = {this.handleValveChange} />
                <br/>
                Plungers: -
                <input type="number" name="name" onChange = {this.handleValveChange}/>
                <br/>
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default AddParts;
