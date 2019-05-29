import axios from "axios";

export default {
  // get all maint logs
  getMaintLogs: function () {
    return axios.get("/api/maintenance_logs")
  },
  // get all maint logs
  GetParts: function () {
    return axios.get("/api/parts")
  },
  GetPumps: function () {
    return axios.get('/api/savedPumps')
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