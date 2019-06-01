import React, { Component } from 'react';
import ValveMaint from "../components/Valves"
import PackingMaint from "../components/PackingMaint"
import PlungerMaint from "../components/PlungerMaint"
import SeatMaint from "../components/SeatMaint"
import SealMaint from "../components/SealMaint"
import axios from 'axios';


class addMaintLog extends React.Component {

    state = {
        unit_id: '',
        stroke_range: '',
        valve_used: 0,
        seat_used: 0,
        Seal_used: 0,
        packing_used: 0,
        plunger_used: 0,
        //discharge valve
        DH1_valve: false,
        DH2_valve: false,
        DH3_valve: false,
        DH4_valve: false,
        DH5_valve: false,
        //discharge seat
        DH1_seat: false,
        DH2_seat: false,
        DH3_seat: false,
        DH4_seat: false,
        DH5_seat: false,
        //discharge Seal
        DH1_Seal: false,
        DH2_Seal: false,
        DH3_Seal: false,
        DH4_Seal: false,
        DH5_Seal: false,
        //suciton valve
        SH1_valve: false,
        SH2_valve: false,
        SH3_valve: false,
        SH4_valve: false,
        SH5_valve: false,
        //suction seat
        SH1_seat: false,
        SH2_seat: false,
        SH3_seat: false,
        SH4_seat: false,
        SH5_seat: false,
        //suction Seal
        SH1_Seal: false,
        SH2_Seal: false,
        SH3_Seal: false,
        SH4_Seal: false,
        SH5_Seal: false,
        //packing
        SH1_packing: false,
        SH2_packing: false,
        SH3_packing: false,
        SH4_packing: false,
        SH5_packing: false,
        // plungers
        SH1_plunger: false,
        SH2_plunger: false,
        SH3_plunger: false,
        SH4_plunger: false,
        SH5_plunger: false
    }

    handleUnitIdChange = (e) => {
        let unit_id = e.target.value
        this.setState({ unit_id })
    }

    handlepumpStrokesChange = (e) => {
        let stroke_range = e.target.value
        this.setState({ stroke_range })
    }

    //    // Parts used counters


    // // discharge valve
    // // discharge valve
    // // discharge valve

    // handleDH1_valveChange = (e) => {
    //     this.setState({ DH1_valve: true })
    //     this.setState((prevState, props) => ({
    //         valve_used: prevState.valve_used + 1
    //     })); 
    // }
    // handleDH2_valveChange = (e) => {
    //     this.setState({ DH2_valve: true })
    //     this.setState((prevState, props) => ({
    //         valve_used: prevState.valve_used + 1
    //     })); 
    // }
    // handleDH3_valveChange = (e) => {
    //     this.setState({ DH3_valve: true })
    //     this.setState((prevState, props) => ({
    //         valve_used: prevState.valve_used + 1
    //     })); 
    // }
    // handleDH4_valveChange = (e) => {
    //     this.setState({ DH4_valve: true })
    //     this.setState((prevState, props) => ({
    //         valve_used: prevState.valve_used + 1
    //     })); 
    // }
    // handleDH5_valveChange = (e) => {
    //     this.setState({ DH5_valve: true })
    //     this.setState((prevState, props) => ({
    //         valve_used: prevState.valve_used + 1
    //     })); 
    // }
    // // discharge seat
    // // discharge seat
    // // discharge seat
    
    // handleDH1_seatChange = (e) => {
    //     this.setState({ DH1_seat: true })
    //     this.setState((prevState, props) => ({
    //         seat_used: prevState.seat_used + 1
    //     })); 
    // }
    // handleDH2_seatChange = (e) => {
    //     this.setState({ DH2_seat: true })
    //     this.setState((prevState, props) => ({
    //         seat_used: prevState.seat_used + 1
    //     })); 
    // }
    // handleDH3_seatChange = (e) => {
    //     this.setState({ DH3_seat: true })
    //     this.setState((prevState, props) => ({
    //         seat_used: prevState.seat_used + 1
    //     })); 
    // }
    // handleDH4_seatChange = (e) => {
    //     this.setState({ DH4_seat: true })
    //     this.setState((prevState, props) => ({
    //         seat_used: prevState.seat_used + 1
    //     })); 
    // }
    // handleDH5_seatChange = (e) => {
    //     this.setState({ DH5_seat: true })
    //     this.setState((prevState, props) => ({
    //         seat_used: prevState.seat_used + 1
    //     })); 
    // }
    // // discharge Seal    // discharge Seal
    // // discharge Seal
    // // discharge Seal

    // handleDH1_SealChange = (e) => {
    //     this.setState({ DH1_Seal: true })
    //     this.setState((prevState, props) => ({
    //         Seal_used: prevState.Seal_used + 1
    //     })); 
    // }
    // handleDH2_SealChange = (e) => {
    //     this.setState({ DH2_Seal: true })
    //     this.setState((prevState, props) => ({
    //         Seal_used: prevState.Seal_used + 1
    //     })); 
    // }
    // handleDH3_SealChange = (e) => {
    //     this.setState({ DH3_Seal: true })
    //     this.setState((prevState, props) => ({
    //         Seal_used: prevState.Seal_used + 1
    //     })); 
    // }
    // handleDH4_SealChange = (e) => {
    //     this.setState({ DH4_Seal: true })
    //     this.setState((prevState, props) => ({
    //         Seal_used: prevState.Seal_used + 1
    //     })); 
    // }
    // handleDH5_SealChange = (e) => {
    //     this.setState({ DH5_Seal: true })
    //     this.setState((prevState, props) => ({
    //         Seal_used: prevState.Seal_used + 1
    //     })); 
    // }
    // // suction valve
    // // suction valve
    // // suction valve

    // handleSH1_valveChange = (e) => {
    //     this.setState({ SH1_valve: true })
    //     this.setState((prevState, props) => ({
    //         valve_used: prevState.valve_used + 1
    //     })); 
    // }
    // handleSH2_valveChange = (e) => {
    //     this.setState({ SH2_valve: true })
    //     this.setState((prevState, props) => ({
    //         valve_used: prevState.valve_used + 1
    //     })); 
    // }
    // handleSH3_valveChange = (e) => {
    //     this.setState({ SH3_valve: true })
    //     this.setState((prevState, props) => ({
    //         valve_used: prevState.valve_used + 1
    //     })); 
    // }
    // handleSH4_valveChange = (e) => {
    //     this.setState({ SH4_valve: true })
    //     this.setState((prevState, props) => ({
    //         valve_used: prevState.valve_used + 1
    //     })); 
    // }
    // handleSH5_valveChange = (e) => {
    //     this.setState({ SH5_valve: true })
    //     this.setState((prevState, props) => ({
    //         valve_used: prevState.valve_used + 1
    //     })); 
    // }
    // // suction seat
    // // suction seat
    // // suction seat

    // handleSH1_seatChange = (e) => {
    //     this.setState({ SH1_seat: true })
    //     this.setState((prevState, props) => ({
    //         seat_used: prevState.seat_used + 1
    //     })); 
    // }
    // handleSH2_seatChange = (e) => {
    //     this.setState({ SH2_seat: true })
    //     this.setState((prevState, props) => ({
    //         seat_used: prevState.seat_used + 1
    //     })); 
    // }
    // handleSH3_seatChange = (e) => {
    //     this.setState({ SH3_seat: true })
    //     this.setState((prevState, props) => ({
    //         seat_used: prevState.seat_used + 1
    //     })); 
    // }
    // handleSH4_seatChange = (e) => {
    //     this.setState({ SH4_seat: true })
    //     this.setState((prevState, props) => ({
    //         seat_used: prevState.seat_used + 1
    //     })); 
    // }
    // handleSH5_seatChange = (e) => {
    //     this.setState({ SH5_seat: true })
    //     this.setState((prevState, props) => ({
    //         seat_used: prevState.seat_used + 1
    //     })); 
    // }

    // // suction Seal
    // // suction Seal
    // // suction Seal

    // handleSH1_SealChange = (e) => {
    //     this.setState({ SH1_Seal: true })
    //     this.setState((prevState, props) => ({
    //         Seal_used: prevState.Seal_used + 1
    //     })); 
    // }
    // handleSH2_SealChange = (e) => {
    //     this.setState({ SH2_Seal: true })
    //     this.setState((prevState, props) => ({
    //         Seal_used: prevState.Seal_used + 1
    //     })); 
    // }
    // handleSH3_SealChange = (e) => {
    //     this.setState({ SH3_Seal: true })
    //     this.setState((prevState, props) => ({
    //         Seal_used: prevState.Seal_used + 1
    //     })); 
    // }
    // handleSH4_SealChange = (e) => {
    //     this.setState({ SH4_Seal: true })
    //     this.setState((prevState, props) => ({
    //         Seal_used: prevState.Seal_used + 1
    //     })); 
    // }
    // handleSH5_SealChange = (e) => {
    //     this.setState({ SH5_Seal: true })
    //     this.setState((prevState, props) => ({
    //         Seal_used: prevState.Seal_used + 1
    //     })); 
    // }
    // // packing
    // // PACKING
    // //  packing

    // handleSH1_packingChange = (e) => {
    //     this.setState({ SH1_packing: true})
    //     this.setState((prevState, props) => ({
    //         packing_used: prevState.packing_used + 1
    //     })); 
    // }
    // handleSH2_packingChange = (e) => {
    //     this.setState({ SH2_packing: true })
    //     this.setState((prevState, props) => ({
    //         packing_used: prevState.packing_used + 1
    //     })); 
    // }
    // handleSH3_packingChange = (e) => {
    //     this.setState({ SH3_packing: true})
    //     this.setState((prevState, props) => ({
    //         packing_used: prevState.packing_used + 1
    //     })); 
    // }
    // handleSH4_packingChange = (e) => {
    //     this.setState({ SH4_packing: true})
    //     this.setState((prevState, props) => ({
    //         packing_used: prevState.packing_used + 1
    //     })); 
    // }
    // handleSH5_packingChange = (e) => {
    //     this.setState({ SH5_packing: true})
    //     this.setState((prevState, props) => ({
    //         packing_used: prevState.packing_used + 1
    //     })); 
    // }

    // // plungers
    // //  plunger
    // // plungers

    // handleSH1_plungerChange = (e) => {
    //     this.setState({ SH1_plunger: true})
    //     this.setState((prevState, props) => ({
    //         plunger_used: prevState.plunger_used + 1
    //     })); 
    // }
    // handleSH2_plungerChange = (e) => {
    //     this.setState({ SH2_plunger: true })
    //     this.setState((prevState, props) => ({
    //         plunger_used: prevState.plunger_used + 1
    //     })); 
    // }
    // handleSH3_plungerChange = (e) => {
    //     this.setState({ SH3_plunger: true })
    //     this.setState((prevState, props) => ({
    //         plunger_used: prevState.plunger_used + 1
    //     })); 
    // }
    // handleSH4_plungerChange = (e) => {
    //     this.setState({ SH4_plunger: true })
    //     this.setState((prevState, props) => ({
    //         plunger_used: prevState.plunger_used + 1
    //     })); 
    // }
    // handleSH5_plungerChange = (e) => {
    //     this.setState({ SH5_plunger: true })
    //     this.setState((prevState, props) => ({
    //         plunger_used: prevState.plunger_used + 1
    //     })); 
    // }
    handleSubmit = (e) => {
        e.preventDefault()
        // this.handleStockUpdate();
        console.log(this.state)
        axios.post('http://localhost:7000/api/maintenance_logs', this.state)
        // axios.put('http://localhost:7000/api/parts', this.state)
    }

 
render() {
    return (
        <form onSubmit = {this.handleSubmit}>
        <input type = 'Text' placeholder = 'Unit ID' onChange = {this.handleUnitIdChange} />
        <input type = 'Text' placeholder = 'Pump Strokes' onChange = {this.handlepumpStrokesChange} /> 
            <ValveMaint onSubmit={this.setState}/>
            <SeatMaint onSubmit={this.setState}/>
            <SealMaint onSubmit={this.setState}/>
            <PackingMaint onSubmit={this.setState}/>
            <PlungerMaint onSubmit={this.setState}/>
        <br></br>
        <h4>
        Submit
        <button type = 'submit'value="Submit"/>
        </h4>
        </form>
    );
  }
  
}
  export default addMaintLog;