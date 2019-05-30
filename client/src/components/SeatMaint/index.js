import React, { Component } from 'react';
import API from "../../utils/API";

class SeatMaint extends Component {

    state = {

        seat_used: 0,

        //discharge seat
        DH1_seat: false,
        DH2_seat: false,
        DH3_seat: false,
        DH4_seat: false,
        DH5_seat: false,

        //suciton seat
        SH1_seat: false,
        SH2_seat: false,
        SH3_seat: false,
        SH4_seat: false,
        SH5_seat: false,

    }

    handleDH1_seatChange = (e) => {
        this.setState({ DH1_seat: true })
        this.setState((prevState, props) => ({
            seat_used: prevState.seat_used + 1
        })); 
    }
    handleDH2_seatChange = (e) => {
        this.setState({ DH2_seat: true })
        this.setState((prevState, props) => ({
            seat_used: prevState.seat_used + 1
        })); 
    }
    handleDH3_seatChange = (e) => {
        this.setState({ DH3_seat: true })
        this.setState((prevState, props) => ({
            seat_used: prevState.seat_used + 1
        })); 
    }
    handleDH4_seatChange = (e) => {
        this.setState({ DH4_seat: true })
        this.setState((prevState, props) => ({
            seat_used: prevState.seat_used + 1
        })); 
    }
    handleDH5_seatChange = (e) => {
        this.setState({ DH5_seat: true })
        this.setState((prevState, props) => ({
            seat_used: prevState.seat_used + 1
        })); 
    }
    
    handleSH1_seatChange = (e) => {
        this.setState({ SH1_seat: true })
        this.setState((prevState, props) => ({
            seat_used: prevState.seat_used + 1
        })); 
    }
    handleSH2_seatChange = (e) => {
        this.setState({ SH2_seat: true })
        this.setState((prevState, props) => ({
            seat_used: prevState.seat_used + 1
        })); 
    }
    handleSH3_seatChange = (e) => {
        this.setState({ SH3_seat: true })
        this.setState((prevState, props) => ({
            seat_used: prevState.seat_used + 1
        })); 
    }
    handleSH4_seatChange = (e) => {
        this.setState({ SH4_seat: true })
        this.setState((prevState, props) => ({
            seat_used: prevState.seat_used + 1
        })); 
    }
    handleSH5_seatChange = (e) => {
        this.setState({ SH5_seat: true })
        this.setState((prevState, props) => ({
            seat_used: prevState.seat_used + 1
        })); 
    }
    render () {
        return (

            //                <h3>Discharge seats
                <div>
                    <h3>Discharge Seats
                <input type = 'Checkbox' onChange = {this.handleDH1_seatChange} />
                <input type = 'Checkbox' onChange = {this.handleDH2_seatChange} />
                <input type = 'Checkbox' onChange = {this.handleDH3_seatChange} />
                <input type = 'Checkbox' onChange = {this.handleDH4_seatChange} />
                <input type = 'Checkbox' onChange = {this.handleDH5_seatChange} />
                </h3>
                <h3>Suction Seats
                <input type = 'Checkbox' onChange = {this.handleSH1_seatChange} />
                <input type = 'Checkbox' onChange = {this.handleSH2_seatChange} />
                <input type = 'Checkbox' onChange = {this.handleSH3_seatChange} />
                <input type = 'Checkbox' onChange = {this.handleSH4_seatChange} />
                <input type = 'Checkbox' onChange = {this.handleSH5_seatChange} />
                </h3>
                </div>
                )
}
}
export default (SeatMaint);