import React from "react";
import axios from 'axios';
import API from "../utils/API";
import { Container } from "../components/Grid";



 
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
    // discharge valve
    // discharge valve

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
    // discharge seat
    // discharge seat
    // discharge seat
    
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
    // discharge DRing    // discharge DRing
    // discharge DRing
    // discharge DRing

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
    // suction valve
    // suction valve
    // suction valve

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
    // suction seat
    // suction seat
    // suction seat

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

    // suction DRing
    // suction DRing
    // suction DRing

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
    // packing
    // PACKING
    //  packing

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

    // plungers
    //  plunger
    // plungers

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
        this.setState({ SH3_plunger: true })
        this.setState((prevState, props) => ({
            plunger_used: prevState.plunger_used + 1
        })); 
    }
    handleSH4_plungerChange = (e) => {
        this.setState({ SH4_plunger: true })
        this.setState((prevState, props) => ({
            plunger_used: prevState.plunger_used + 1
        })); 
    }
    handleSH5_plungerChange = (e) => {
        this.setState({ SH5_plunger: true })
        this.setState((prevState, props) => ({
            plunger_used: prevState.plunger_used + 1
        })); 
    }

    // componentDidMount() {
    //     this.handleStockUpdate();
    // }

    // handleStockUpdate = (e) => {
    //     // API.EditStock()
    //     if (this.state.plunger_used) {
    //         API.EditStock()
    //         .then.setState
    //     }
    //     console.log(this.state.plunger_used)
    //     console.log(this.state.valve_used)
    //     console.log(this.state.DRing_used)
    //     console.log(this.state.seat_used)
    //     console.log(this.state.packing_used)
    // }

//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };
    handleSubmit = (e) => {
        e.preventDefault()
        API.addMaintLog({
            unit_id: this.state.unit_id,
            stroke_range: this.state.stroke_range,
            valve_used: this.state.valve_used,
            seat_used: this.state.seat_used,
            DRing_used: this.state.DRing_used,
            packing_used: this.state.packing_used,
            plunger_used: this.state.plunger_used,
            //discharge valve
            DH1_valve: this.state.DH1_valve,
            DH2_valve: this.state.DH2_valve,
            DH3_valve: this.state.DH3_valve,
            DH4_valve: this.state.DH4_valve,
            DH5_valve: this.state.DH5_valve,
            //discharge seat
            DH1_seat: this.state.DH1_seat,
            DH2_seat: this.state.DH2_seat,
            DH3_seat: this.state.DH3_seat,
            DH4_seat: this.state.DH4_seat,
            DH5_seat: this.state.DH5_seat,
            //discharge DRing
            DH1_DRing: this.state.DH1_DRing,
            DH2_DRing: this.state.DH2_DRing,
            DH3_DRing: this.state.DH3_DRing,
            DH4_DRing: this.state.DH4_DRing,
            DH5_DRing: this.state.DH5_DRing,
            //suciton valve
            SH1_valve: this.state.SH1_valve,
            SH2_valve: this.state.SH2_valve,
            SH3_valve: this.state.SH3_valve,
            SH4_valve: this.state.SH4_valve,
            SH5_valve: this.state.SH5_valve,
            //suction seat
            SH1_seat: this.state.SH1_seat,
            SH2_seat: this.state.SH2_seat,
            SH3_seat: this.state.SH3_seat,
            SH4_seat: this.state.SH4_seat,
            SH5_seat: this.state.SH5_seat,
            //suction DRing
            SH1_DRing: this.state.SH1_DRing,
            SH2_DRing: this.state.SH2_DRing,
            SH3_DRing: this.state.SH3_DRing,
            SH4_DRing: this.state.SH4_DRing,
            SH5_DRing: this.state.SH5_DRing,
            //packing
            SH1_packing: this.state.SH1_packing,
            SH2_packing: this.state.SH2_packing,
            SH3_packing: this.state.SH3_packing,
            SH4_packing: this.state.SH4_packing,
            SH5_packing: this.state.SH5_packing,
            // plungers
            SH1_plunger: this.state.SH1_plunger,
            SH2_plunger: this.state.SH2_plunger,
            SH3_plunger: this.state.SH3_plunger,
            SH4_plunger: this.state.SH4_plunger,
            SH5_plunger: this.state.SH5_plunger
        
        })
        console.log(this.state)
        // axios.post('http://localhost:7000/api/maintenance_logs', this.state)
        // axios.put('http://localhost:7000/api/parts', this.state)
    }
    render()
    {
        
        return (
            <Container>
            <form onSubmit = {this.handleSubmit}>
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
                {/* { discharge seat */} 
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
        </Container>
      );
    }
}


// handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.unit_id && this.state.stroke_range) {
//       API.addMaintLog({
//         unit_id: this.state.unit_id,
//         stroke_range: this.state.stroke_range,
//       })
//         .catch(err => console.log(err));
//     }




export default addMaint;