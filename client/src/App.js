import React from 'react';
import './App.css';
import TopNav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Maintenance_Logs from "./pages/maintenance_logs";
import Inventory from "./pages/inventory";
import UOS from './pages/units_on-site';
import PM from './pages/pump_maint';
import addMaintlog from './pages/addMaint';
import AddMaint from './pages/testpage';

import axios from 'axios';

// class App extends Component {
//   state = {
//     MaintData: {}
//   }
//   componentDidMount () {
//     this.setState({test:'testing'})     
//     this.GetAllData()
//   }
//   GetAllData = (event) => {
//     let that = this;
//     // use aws link 
//     axios.get("http://localhost:7000/maintenance_logs")
//     .then(function(response){
//       that.setState({MaintData: response})
//     })
//     .catch(function(err){
//       console.log(err)
//     })
//   }
  function App () {
    return (
      <Router>
      <div>
        <h1>FIM Solutions</h1>
        <TopNav />
        <Switch>
          <Route exact path="/" component={Maintenance_Logs} />
          <Route exact path="/maintenance_logs" component={Maintenance_Logs} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/pump_maint" component={PM} />
          <Route exact path="/units_on-site" component={UOS} />
          <Route exact path="/addMaint" component={addMaintlog} />
          <Route exact path="/testpage" component={AddMaint} />
        </Switch>
      </div>
    </Router>
    );
  }

export default App;
