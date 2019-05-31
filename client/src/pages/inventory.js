import React, { Component } from 'react';
import InventoryTable from "../components/inventoryTable"
// import AddParts from "../components/AddParts";
import API from "../utils/API";

class Inventory extends Component {
    
  state = {
      //parts
      parts:[],
      valve: 50,
      seat: 0,
      plunger: 0,
      DRing: 0,

  }

  componentDidMount() {
    this.loadparts();
  }


  loadparts = () => {
    API.GetParts()
    .then(res =>
      this.setState({parts:res.data})
      )
      .catch(err => console.log(err));
  };

  setStock = () => {
    API.EditStock()
    .then(res =>
      this.setState)
  }

  handleValveUpdate = () => {
    this.setState({valve: this.state.valve })
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
    <div>
      <InventoryTable />
      <br></br>
      <form onSubmit = {this.handleFormSubmit}>
                <label>
                Valves:  -
                <input type="number" name="name" onChange = {this.handleValveUpdate}/>
                <br/>
                {/* Seats:   -
                <input type="number" name="name" onChange = {this.setState.seat} />
                <br/>
                D-Rings: -
                <input type="number" name="name" onChange = {this.setState.plunger} />
                <br/>
                Packing: -
                <input type="number" name="name" onChange = {this.setState.DRing} />
                <br/>
                Plungers: -
                <input type="number" name="name" onChange = {this.setState.packing}/> */}
                <br/>
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
    </div>
  );
}
}

export default Inventory;