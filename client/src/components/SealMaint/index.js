import React, { Component } from 'react';
import API from "../../utils/API";

class DRingMaint extends Component {

    state = {

        DRing_used: 0,

        //discharge DRing
        DH1_DRing: false,
        DH2_DRing: false,
        DH3_DRing: false,
        DH4_DRing: false,
        DH5_DRing: false,

        //suciton DRing
        SH1_DRing: false,
        SH2_DRing: false,
        SH3_DRing: false,
        SH4_DRing: false,
        SH5_DRing: false,

    }

    handleDH1_DRingChange = (e) => {
        this.setState({ DH1_DRing: true })
        this.setState((prevState, props) => ({
            DRing_used: prevState.DRing_used + 1
        })); 
    }
    handleDH2_DRingChange = (e) => {
        this.setState({ DH2_DRing: true })
        this.setState((prevState, props) => ({
            DRing_used: prevState.DRing_used + 1
        })); 
    }
    handleDH3_DRingChange = (e) => {
        this.setState({ DH3_DRing: true })
        this.setState((prevState, props) => ({
            DRing_used: prevState.DRing_used + 1
        })); 
    }
    handleDH4_DRingChange = (e) => {
        this.setState({ DH4_DRing: true })
        this.setState((prevState, props) => ({
            DRing_used: prevState.DRing_used + 1
        })); 
    }
    handleDH5_DRingChange = (e) => {
        this.setState({ DH5_DRing: true })
        this.setState((prevState, props) => ({
            DRing_used: prevState.DRing_used + 1
        })); 
    }
    
    handleSH1_DRingChange = (e) => {
        this.setState({ SH1_DRing: true })
        this.setState((prevState, props) => ({
            DRing_used: prevState.DRing_used + 1
        })); 
    }
    handleSH2_DRingChange = (e) => {
        this.setState({ SH2_DRing: true })
        this.setState((prevState, props) => ({
            DRing_used: prevState.DRing_used + 1
        })); 
    }
    handleSH3_DRingChange = (e) => {
        this.setState({ SH3_DRing: true })
        this.setState((prevState, props) => ({
            DRing_used: prevState.DRing_used + 1
        })); 
    }
    handleSH4_DRingChange = (e) => {
        this.setState({ SH4_DRing: true })
        this.setState((prevState, props) => ({
            DRing_used: prevState.DRing_used + 1
        })); 
    }
    handleSH5_DRingChange = (e) => {
        this.setState({ SH5_DRing: true })
        this.setState((prevState, props) => ({
            DRing_used: prevState.DRing_used + 1
        })); 
    }
    render () {
        return (

            //                <h3>Discharge DRings
                <div>
                    <h3>Discharge D-Rings
                <input type = 'Checkbox' onChange = {this.handleDH1_DRingChange} />
                <input type = 'Checkbox' onChange = {this.handleDH2_DRingChange} />
                <input type = 'Checkbox' onChange = {this.handleDH3_DRingChange} />
                <input type = 'Checkbox' onChange = {this.handleDH4_DRingChange} />
                <input type = 'Checkbox' onChange = {this.handleDH5_DRingChange} />
                </h3>
                <h3>Suction D-Rings
                    
                <input type = 'Checkbox' onChange = {this.handleSH1_DRingChange} />
                <input type = 'Checkbox' onChange = {this.handleSH2_DRingChange} />
                <input type = 'Checkbox' onChange = {this.handleSH3_DRingChange} />
                <input type = 'Checkbox' onChange = {this.handleSH4_DRingChange} />
                <input type = 'Checkbox' onChange = {this.handleSH5_DRingChange} />
                </h3>
                </div>
                )
}
}
export default (DRingMaint);