import React, { Component } from 'react';
import InventoryTable from "../components/inventoryTable"
// import AddParts from "../components/AddParts";
import API from "../utils/API";

class Inventory extends Component {
    
  state = {
      //parts
      parts:[],
      valve: "",
      seat: '',
      plunger: ''

  }

  componentDidMount() {
    this.loadparts();
  }


  loadparts = () => {
    API.GetParts()
    .then(res =>
      this.setState({parts:res.data, valve: '', seat: '', plunger:''})
      )
      .catch(err => console.log(err));
  };

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
    <div>
      <InventoryTable />
      <br></br>
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
    </div>
  );
}
}

export default Inventory;