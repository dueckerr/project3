import React, { Component } from 'react';
import InventoryTable from "../components/inventoryTable"
// import AddParts from "../components/AddParts";
import API from "../utils/API";
import { Container } from '../components/Grid';

class Inventory extends Component {
    
  state = {
      //parts
      parts:[],
      valve: 0,
      seat: 0,
      plunger: 0,
      Seal: 0,

  }

  componentDidMount() {
    this.loadparts();
  }


  loadparts = () => {
    API.GetParts()
    .then(res =>
      this.setState({parts:res.data,
        valve: res.data.stock,
        seat: res.data.stock,
        Seal: res.data.stock,
        packing: res.data.stock,
        plunger: res.data.stock
            })
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
  handleseatUpdate = () => {
    this.setState({seat: this.state.seat })
  }
  handleSealUpdate = () => {
    this.setState({Seal: this.state.Seal })
  }
  handlepackingUpdate = () => {
    this.setState({packing: this.state.packing })
  }
  handleplungerUpdate = () => {
    this.setState({plunger: this.state.plunger })
  }

  handleFormSubmit = (e) => {
      (e).preventDefault();
      console.log(this.state)

      //   API.EditStock({
      //     Valve: this.state.Valve,
      //     Seat: this.state.Seat,
      //     Seal: this.state.Seal
      //   })
      //     .then(res => this.loadBooks())
      //     .catch(err => console.log(err));
      
    };

  render () {
    return (
    <div>
      <Container>

      <InventoryTable />
      <br></br>
      <form onSubmit = {this.handleFormSubmit}>
                <label>
                Valves:  -
                <input type="number" name="valve" onChange = {this.handleValveUpdate}/>
                <br/>
                Seats:   -
                <input type="number" name="seat" onChange = {this.handleseatUpdate} />
                <br/>
                Seal: -
                <input type="number" name="Seal" onChange = {this.handleSealUpdate} />
                <br/>
                Packing: -
                <input type="number" name="packing" onChange = {this.handlepackingUpdate} />
                <br/>
                Plungers: -
              <input type="number" name="plunger" onChange = {this.handleplungerUpdate}/>
                <br/>
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
              </Container>
    </div>
  );
}
}

export default Inventory;