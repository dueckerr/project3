import React, { Component } from 'react';
import API from "../../utils/API";

class ValveMaint extends Component {

    state = {

        valve_used: 0,

        //discharge valve
        DH1_valve: false,
        DH2_valve: false,
        DH3_valve: false,
        DH4_valve: false,
        DH5_valve: false,

        //suciton valve
        SH1_valve: false,
        SH2_valve: false,
        SH3_valve: false,
        SH4_valve: false,
        SH5_valve: false,

    }

    handleDH1_valveChange = (e) => {
        this.setState({ DH1_valve: true })
        this.setState((prevState, props) => ({
            valve_used: prevState.valve_used + 1
        })); 
    }
    handleDH2_valveChange = (e) => {
        this.setState({ DH2_valve: true })
        this.setState((prevState, props) => ({
            valve_used: prevState.valve_used + 1
        })); 
    }
    handleDH3_valveChange = (e) => {
        this.setState({ DH3_valve: true })
        this.setState((prevState, props) => ({
            valve_used: prevState.valve_used + 1
        })); 
    }
    handleDH4_valveChange = (e) => {
        this.setState({ DH4_valve: true })
        this.setState((prevState, props) => ({
            valve_used: prevState.valve_used + 1
        })); 
    }
    handleDH5_valveChange = (e) => {
        this.setState({ DH5_valve: true })
        this.setState((prevState, props) => ({
            valve_used: prevState.valve_used + 1
        })); 
    }
    
    handleSH1_valveChange = (e) => {
        this.setState({ SH1_valve: true })
        this.setState((prevState, props) => ({
            valve_used: prevState.valve_used + 1
        })); 
    }
    handleSH2_valveChange = (e) => {
        this.setState({ SH2_valve: true })
        this.setState((prevState, props) => ({
            valve_used: prevState.valve_used + 1
        })); 
    }
    handleSH3_valveChange = (e) => {
        this.setState({ SH3_valve: true })
        this.setState((prevState, props) => ({
            valve_used: prevState.valve_used + 1
        })); 
    }
    handleSH4_valveChange = (e) => {
        this.setState({ SH4_valve: true })
        this.setState((prevState, props) => ({
            valve_used: prevState.valve_used + 1
        })); 
    }
    handleSH5_valveChange = (e) => {
        this.setState({ SH5_valve: true })
        this.setState((prevState, props) => ({
            valve_used: prevState.valve_used + 1
        })); 
    }
    render () {
        return (

            //                <h3>Discharge Valves
                <div>
                    <h3>Discharge Valves
                <input type = 'Checkbox' onChange = {this.handleDH1_valveChange} />
                <input type = 'Checkbox' onChange = {this.handleDH2_valveChange} />
                <input type = 'Checkbox' onChange = {this.handleDH3_valveChange} />
                <input type = 'Checkbox' onChange = {this.handleDH4_valveChange} />
                <input type = 'Checkbox' onChange = {this.handleDH5_valveChange} />
                </h3>
                <h3>Suction Valves
                <input type = 'Checkbox' onChange = {this.handleSH1_valveChange} />
                <input type = 'Checkbox' onChange = {this.handleSH2_valveChange} />
                <input type = 'Checkbox' onChange = {this.handleSH3_valveChange} />
                <input type = 'Checkbox' onChange = {this.handleSH4_valveChange} />
                <input type = 'Checkbox' onChange = {this.handleSH5_valveChange} />
                </h3>
                </div>
                )
}
}
export default (ValveMaint);