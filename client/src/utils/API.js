import axios from "axios";

export default {
  // get all maint logs
  getMaintLogs: function () {
    return axios.get("/maintenance_logs")
  }
}

// export default {
//   FleetData = (event) => {
//     let that = this;
//     // use aws link 
//     axios.get("http://localhost:7000/api/fleets")
//     .then(function(response){
//       that.setState({fleets: response})
//     })
//     .catch(function(err){
//       console.log(err)
//     })
//   }
  
  
//   MaintLogsData = (event) => {
//     let that = this;
//     // use aws link 
//     axios.get("http://localhost:7000/api/maintenance_logs")
//     .then(function(response){
//       that.setState({maintLogs: response})
//     })
//     .catch(function(err){
//       console.log(err)
//     })
//   }


// PartsData = (event) => {
//     let that = this;
//     // use aws link 
//     axios.get("http://localhost:7000/api/fleets")
//     .then(function(response){
//       that.setState({fleets: response})
//     })
//     .catch(function(err){
//       console.log(err)
//     })
//   }



// MaintData = (event) => {
//     let that = this;
//     // use aws link 
//     axios.get("http://localhost:7000/api/fleets")
//     .then(function(response){
//       that.setState({fleets: response})
//     })
//     .catch(function(err){
//       console.log(err)
//     })
//   }