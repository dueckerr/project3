import React, { Component } from 'react';
import API from "../../utils/API";

class PackingMaint extends Component {

    state = {

        packing_used: 0,

        //packing
        SH1_packing: false,
        SH2_packing: false,
        SH3_packing: false,
        SH4_packing: false,
        SH5_packing: false,

    }

    handleSH1_packingChange = (e) => {
        this.setState({ SH1_packing: true})
        this.setState((prevState, props) => ({
            packing_used: prevState.packing_used + 1
        })); 
    }
    handleSH2_packingChange = (e) => {
        this.setState({ SH2_packing: true })
        this.setState((prevState, props) => ({
            packing_used: prevState.packing_used + 1
        })); 
    }
    handleSH3_packingChange = (e) => {
        this.setState({ SH3_packing: true})
        this.setState((prevState, props) => ({
            packing_used: prevState.packing_used + 1
        })); 
    }
    handleSH4_packingChange = (e) => {
        this.setState({ SH4_packing: true})
        this.setState((prevState, props) => ({
            packing_used: prevState.packing_used + 1
        })); 
    }
    handleSH5_packingChange = (e) => {
        this.setState({ SH5_packing: true})
        this.setState((prevState, props) => ({
            packing_used: prevState.packing_used + 1
        })); 
    }

    render () {
        return (

            // Packing
                <div>
                <h3>Packing
                <input type = 'Checkbox' placeholder = 'SH1_packing' onChange = {this.handleSH1_packingChange} />
                <input type = 'Checkbox' placeholder = 'SH2_packing' onChange = {this.handleSH2_packingChange} />
                <input type = 'Checkbox' placeholder = 'SH3_packing' onChange = {this.handleSH3_packingChange} />
                <input type = 'Checkbox' placeholder = 'SH4_packing' onChange = {this.handleSH4_packingChange} />
                <input type = 'Checkbox' placeholder = 'SH5_packing' onChange = {this.handleSH5_packingChange} />
                </h3>
                </div>
                )
}
}
export default (PackingMaint);