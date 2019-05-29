import React from "react";
import InventoryTable from "../components/inventoryTable"
import axios from 'axios';

 
class addMaint extends React.Component {

    state = {
        unit_id: '',
        stroke_range: '',
        valve_used: 0,
        seat_used: 0,
        DRing_used: 0,
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
        //discharge DRing
        DH1_DRing: false,
        DH2_DRing: false,
        DH3_DRing: false,
        DH4_DRing: false,
        DH5_DRing: false,
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
        //suction DRing
        SH1_DRing: false,
        SH2_DRing: false,
        SH3_DRing: false,
        SH4_DRing: false,
        SH5_DRing: false,
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

    // Parts used counters



    // discharge valve
    handleDH1_valveChange = (e) => {
        this.setState({ DH1_valve: true })
    }
    handleDH2_valveChange = (e) => {
        this.setState({ DH2_valve: true })
    }
    handleDH3_valveChange = (e) => {
        this.setState({ DH3_valve: true })
    }
    handleDH4_valveChange = (e) => {
        this.setState({ DH4_valve: true })
    }
    handleDH5_valveChange = (e) => {
        this.setState({ DH5_valve: true })
    }
    // discharge seat
    handleDH1_seatChange = (e) => {
        this.setState({ DH1_seat: true })
    }
    handleDH2_seatChange = (e) => {
        this.setState({ DH2_seat: true })
    }
    handleDH3_seatChange = (e) => {
        this.setState({ DH3_seat: true })
    }
    handleDH4_seatChange = (e) => {
        this.setState({ DH4_seat: true })
    }
    handleDH5_seatChange = (e) => {
        this.setState({ DH5_seat: true })
    }
    // discharge DRing
    handleDH1_DRingChange = (e) => {
        this.setState({ DH1_DRing: true })
    }
    handleDH2_DRingChange = (e) => {
        this.setState({ DH2_DRing: true })
    }
    handleDH3_DRingChange = (e) => {
        this.setState({ DH3_DRing: true })
    }
    handleDH4_DRingChange = (e) => {
        this.setState({ DH4_DRing: true })
    }
    handleDH5_DRingChange = (e) => {
        this.setState({ DH5_DRing: true })
    }
    // suction valve
    handleSH1_valveChange = (e) => {
        this.setState({ SH1_valve: true })
    }
    handleSH2_valveChange = (e) => {
        this.setState({ SH2_valve: true })
    }
    handleSH3_valveChange = (e) => {
        this.setState({ SH3_valve: true })
    }
    handleSH4_valveChange = (e) => {
        this.setState({ SH4_valve: true })
    }
    handleSH5_valveChange = (e) => {
        this.setState({ SH5_valve: true })
    }
    // suction seat
    handleSH1_seatChange = (e) => {
        this.setState({ SH1_seat: true })
    }
    handleSH2_seatChange = (e) => {
        this.setState({ SH2_seat: true })
    }
    handleSH3_seatChange = (e) => {
        this.setState({ SH3_seat: true })
    }
    handleSH4_seatChange = (e) => {
        this.setState({ SH4_seat: true })
    }
    handleSH5_seatChange = (e) => {
        this.setState({ SH5_seat: true })
    }
    // suction DRing
    handleSH1_DRingChange = (e) => {
        this.setState({ SH1_DRing: true })
    }
    handleSH2_DRingChange = (e) => {
        this.setState({ SH2_DRing: true })
    }
    handleSH3_DRingChange = (e) => {
        this.setState({ SH3_DRing: true })
    }
    handleSH4_DRingChange = (e) => {
        this.setState({ SH4_DRing: true })
    }
    handleSH5_DRingChange = (e) => {
        this.setState({ SH5_DRing: true })
    }
    //  packing
    handleSH1_packingChange = (e) => {
        this.setState({ SH1_packing: true })
    }
    handleSH2_packingChange = (e) => {
        this.setState({ SH2_packing: true })
    }
    handleSH3_packingChange = (e) => {
        this.setState({ SH3_packing: true })
    }
    handleSH4_packingChange = (e) => {
        this.setState({ SH4_packing: true })
    }
    handleSH5_packingChange = (e) => {
        this.setState({ SH5_packing: true })
    }
    //  plunger
    handleSH1_plungerChange = (e) => {
        this.setState({ SH1_plunger: true})
    }
    handleSH2_plungerChange = (e) => {
        this.setState({ SH2_plunger: true })
    }
    handleSH3_plungerChange = (e) => {
        this.setState({ SH3_plunger: true })
    }
    handleSH4_plungerChange = (e) => {
        this.setState({ SH4_plunger: true })
    }
    handleSH5_plungerChange = (e) => {
        this.setState({ SH5_plunger: true })
    }
    // calculate parts used
    calculateValvesUsed = (e) => {
        let valve_used = 0
        if (this.state.DH1_valve === true) {valve_used++} 
        if (this.state.DH2_valve === true) {valve_used++} 
        if (this.state.DH3_valve === true) {valve_used++} 
        if (this.state.DH4_valve === true) {valve_used++} 
        if (this.state.DH5_valve === true) {valve_used++} 
        if (this.state.SH1_valve === true) {valve_used++} 
        if (this.state.SH2_valve === true) {valve_used++} 
        if (this.state.SH3_valve === true) {valve_used++} 
        if (this.state.SH4_valve === true) {valve_used++} 
        if (this.state.SH5_valve === true) {valve_used++} 
        // this.setState({valve_used: 0 })
        console.log(valve_used)
        this.setState({valve_used});
    }
            // calculate parts used
    calculateplungersUsed = (e) => {
        let plunger_used = 0
        if (this.state.SH1_plunger === true) {plunger_used++} 
        if (this.state.SH2_plunger === true) {plunger_used++} 
        if (this.state.SH3_plunger === true) {plunger_used++} 
        if (this.state.SH4_plunger === true) {plunger_used++} 
        if (this.state.SH5_plunger === true) {plunger_used++} 
        // this.setState({plunger_used: 0 })
        console.log(plunger_used)
        this.setState({plunger_used});
    }
        // calculate parts used
        calculateDRingsUsed = (e) => {
            let DRing_used = 0
            if (this.state.DH1_DRing === true) {DRing_used++} 
            if (this.state.DH2_DRing === true) {DRing_used++} 
            if (this.state.DH3_DRing === true) {DRing_used++} 
            if (this.state.DH4_DRing === true) {DRing_used++} 
            if (this.state.DH5_DRing === true) {DRing_used++} 
            if (this.state.SH1_DRing === true) {DRing_used++} 
            if (this.state.SH2_DRing === true) {DRing_used++} 
            if (this.state.SH3_DRing === true) {DRing_used++} 
            if (this.state.SH4_DRing === true) {DRing_used++} 
            if (this.state.SH5_DRing === true) {DRing_used++} 
            // this.setState({DRing_used: 0 })
            console.log(DRing_used)
            this.setState({DRing_used});
        }
            // calculate parts used
    calculatepackingsUsed = (e) => {
        let packing_used = 0

        if (this.state.SH1_packing === true) {packing_used++} 
        if (this.state.SH2_packing === true) {packing_used++} 
        if (this.state.SH3_packing === true) {packing_used++} 
        if (this.state.SH4_packing === true) {packing_used++} 
        if (this.state.SH5_packing === true) {packing_used++} 
        // this.setState({packing_used: 0 })
        console.log(packing_used)
        this.setState({packing_used});
    }
        // calculate parts used
        calculateseatsUsed = (e) => {
            let seat_used = 0
            if (this.state.DH1_seat === true) {seat_used++} 
            if (this.state.DH2_seat === true) {seat_used++} 
            if (this.state.DH3_seat === true) {seat_used++} 
            if (this.state.DH4_seat === true) {seat_used++} 
            if (this.state.DH5_seat === true) {seat_used++} 
            if (this.state.SH1_seat === true) {seat_used++} 
            if (this.state.SH2_seat === true) {seat_used++} 
            if (this.state.SH3_seat === true) {seat_used++} 
            if (this.state.SH4_seat === true) {seat_used++} 
            if (this.state.SH5_seat === true) {seat_used++} 
            // this.setState({seat_used: 0 })
            console.log(seat_used)
            this.setState({seat_used});
        }

    CalculateParts = (e) => {
        e.preventDefault()
        this.calculateValvesUsed()
        this.calculateseatsUsed()
        this.calculatepackingsUsed()
        this.calculateDRingsUsed()
        this.calculateplungersUsed()
        console.log(this.state)
        this.handleSubmit()
    }
    handleSubmit = (e) => {
        axios.post('http://localhost:7000/api/maintenance_logs', this.state)
        // axios.update('http://localhost:7000/api/parts', this.setState)
    }
    render()
    {
        return (
            <form onSubmit = {this.CalculateParts}>
                <input type = 'Text' placeholder = 'Unit ID' onChange = {this.handleUnitIdChange} />
                <input type = 'Text' placeholder = 'Pump Strokes' onChange = {this.handlepumpStrokesChange} />

                
                {/* discharge valve */} 
                <br></br>
                <h3>Discharge Valves
                <input type = 'Checkbox' onChange = {this.handleDH1_valveChange} />
                <input type = 'Checkbox' onChange = {this.handleDH2_valveChange} />
                <input type = 'Checkbox' onChange = {this.handleDH3_valveChange} />
                <input type = 'Checkbox' onChange = {this.handleDH4_valveChange} />
                <input type = 'Checkbox' onChange = {this.handleDH5_valveChange} />
                </h3>
                {/* discharge seat */}
                <br></br>
                <h3>Discharge Seats
                <input type = 'Checkbox' onChange = {this.handleDH1_seatChange} />
                <input type = 'Checkbox' placeholder = 'DH2_seat' onChange = {this.handleDH2_seatChange} />
                <input type = 'Checkbox' placeholder = 'DH3_seat' onChange = {this.handleDH3_seatChange} />
                <input type = 'Checkbox' placeholder = 'DH4_seat' onChange = {this.handleDH4_seatChange} />
                <input type = 'Checkbox' placeholder = 'DH5_seat' onChange = {this.handleDH5_seatChange} />
                </h3>
                {/* discharge DRing */}
                <br></br>
                <h3>Discharge D-Rings
                <input type = 'Checkbox' placeholder = 'DH1_DRing' onChange = {this.handleDH1_DRingChange} />
                <input type = 'Checkbox' placeholder = 'DH2_DRing' onChange = {this.handleDH2_DRingChange} />
                <input type = 'Checkbox' placeholder = 'DH3_DRing' onChange = {this.handleDH3_DRingChange} />
                <input type = 'Checkbox' placeholder = 'DH4_DRing' onChange = {this.handleDH4_DRingChange} />
                <input type = 'Checkbox' placeholder = 'DH5_DRing' onChange = {this.handleDH5_DRingChange} />
                </h3>
                {/* suction valve */}
                <br></br>
                <h3>Suction Valves
                <input type = 'Checkbox' placeholder = 'SH1_valve' onChange = {this.handleSH1_valveChange} />
                <input type = 'Checkbox' placeholder = 'SH2_valve' onChange = {this.handleSH2_valveChange} />
                <input type = 'Checkbox' placeholder = 'SH3_valve' onChange = {this.handleSH3_valveChange} />
                <input type = 'Checkbox' placeholder = 'SH4_valve' onChange = {this.handleSH4_valveChange} />
                <input type = 'Checkbox' placeholder = 'SH5_valve' onChange = {this.handleSH5_valveChange} />
                </h3>
                {/* suction seat */}
                <br></br>
                <h3>Suction Seats
                <input type = 'Checkbox' placeholder = 'SH1_seat' onChange = {this.handleSH1_seatChange} />
                <input type = 'Checkbox' placeholder = 'SH2_seat' onChange = {this.handleSH2_seatChange} />
                <input type = 'Checkbox' placeholder = 'SH3_seat' onChange = {this.handleSH3_seatChange} />
                <input type = 'Checkbox' placeholder = 'SH4_seat' onChange = {this.handleSH4_seatChange} />
                <input type = 'Checkbox' placeholder = 'SH5_seat' onChange = {this.handleSH5_seatChange} />
                </h3>
                {/* suction DRing */}
                <br></br>
                <h3>Suction D-Rings
                <input type = 'Checkbox' placeholder = 'SH1_DRing' onChange = {this.handleSH1_DRingChange} />
                <input type = 'Checkbox' placeholder = 'SH2_DRing' onChange = {this.handleSH2_DRingChange} />
                <input type = 'Checkbox' placeholder = 'SH3_DRing' onChange = {this.handleSH3_DRingChange} />
                <input type = 'Checkbox' placeholder = 'SH4_DRing' onChange = {this.handleSH4_DRingChange} />
                <input type = 'Checkbox' placeholder = 'SH5_DRing' onChange = {this.handleSH5_DRingChange} />
                </h3>
                {/* suction packing */}
                <br></br>
                <h3>Packing
                <input type = 'Checkbox' placeholder = 'SH1_packing' onChange = {this.handleSH1_packingChange} />
                <input type = 'Checkbox' placeholder = 'SH2_packing' onChange = {this.handleSH2_packingChange} />
                <input type = 'Checkbox' placeholder = 'SH3_packing' onChange = {this.handleSH3_packingChange} />
                <input type = 'Checkbox' placeholder = 'SH4_packing' onChange = {this.handleSH4_packingChange} />
                <input type = 'Checkbox' placeholder = 'SH5_packing' onChange = {this.handleSH5_packingChange} />
                </h3>
                {/* suction plunger */}
                <br></br>
                <h3>Plungers
                <input type = 'Checkbox' placeholder = 'SH1_plunger' onChange = {this.handleSH1_plungerChange} />
                <input type = 'Checkbox' placeholder = 'SH2_plunger' onChange = {this.handleSH2_plungerChange} />
                <input type = 'Checkbox' placeholder = 'SH3_plunger' onChange = {this.handleSH3_plungerChange} />
                <input type = 'Checkbox' placeholder = 'SH4_plunger' onChange = {this.handleSH4_plungerChange} />
                <input type = 'Checkbox' placeholder = 'SH5_plunger' onChange = {this.handleSH5_plungerChange} />
                </h3>
                <br></br>
                <h4>
                Submit
                <button type = 'submit'value="Submit"/>
                </h4>
            </form>
      );
    }
}


export default addMaint;