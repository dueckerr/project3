import axios from "axios";

export default {
  // get all maint logs
  getMaintLogs: function () {
    return axios.get("/api/maintenance_logs")
  },
  getMaintLogsPerUnit: function (unit_id) {
    return axios.get("/api/maintenance_logs/" + unit_id)
  },
  addMaintLog: function (data) {
    return axios.post("/api/maintenance_logs/", data)
  },
  // get all maint logs
  GetParts: function () {
    return axios.get("/api/parts")
  },
  GetPumps: function () {
    return axios.get('/api/savedPumps')
  },
  EditStock: function (data) {
    return axios.put('/api/parts/edit', data)
  }
}