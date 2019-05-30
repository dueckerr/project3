import React, { Component } from 'react';
import API from "../../utils/API";

class PlungerMaint extends Component {

    state = {

        plunger_used: 0,

        //plunger
        SH1_plunger: false,
        SH2_plunger: false,
        SH3_plunger: false,
        SH4_plunger: false,
        SH5_plunger: false,

    }

    handleSH1_plungerChange = (e) => {
        this.setState({ SH1_plunger: true})
        this.setState((prevState, props) => ({
            plunger_used: prevState.plunger_used + 1
        })); 
    }
    handleSH2_plungerChange = (e) => {
        this.setState({ SH2_plunger: true })
        this.setState((prevState, props) => ({
            plunger_used: prevState.plunger_used + 1
        })); 
    }
    handleSH3_plungerChange = (e) => {
        this.setState({ SH3_plunger: true})
        this.setState((prevState, props) => ({
            plunger_used: prevState.plunger_used + 1
        })); 
    }
    handleSH4_plungerChange = (e) => {
        this.setState({ SH4_plunger: true})
        this.setState((prevState, props) => ({
            plunger_used: prevState.plunger_used + 1
        })); 
    }
    handleSH5_plungerChange = (e) => {
        this.setState({ SH5_plunger: true})
        this.setState((prevState, props) => ({
            plunger_used: prevState.plunger_used + 1
        })); 
    }

    render () {
        return (

            //                <h3>Discharge Valves
                <div>
                <h3>Plungers
                <input type = 'Checkbox' placeholder = 'SH1_plunger' onChange = {this.handleSH1_plungerChange} />
                <input type = 'Checkbox' placeholder = 'SH2_plunger' onChange = {this.handleSH2_plungerChange} />
                <input type = 'Checkbox' placeholder = 'SH3_plunger' onChange = {this.handleSH3_plungerChange} />
                <input type = 'Checkbox' placeholder = 'SH4_plunger' onChange = {this.handleSH4_plungerChange} />
                <input type = 'Checkbox' placeholder = 'SH5_plunger' onChange = {this.handleSH5_plungerChange} />
                </h3>
                </div>
                )
}
}
export default (PlungerMaint);