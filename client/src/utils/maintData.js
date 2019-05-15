import axios from "axios";

export default {
  // Gets all books
  getMaint: function() {
    return axios.get("/maintenance_logs");
  // },
  // // Gets the book with the given id
  // getMaint: function(id) {
  //   return axios.get("/api/maintenance_logs" + id);
  // },
  // // Deletes the book with the given id
  // deleteMaint: function(id) {
  //   return axios.delete("/api/maintenance_logs" + id);
  // },
  // // Saves a book to the database
  // addMaint: function(bookData) {
  //   return axios.post("/api/maintenance_logs", bookData);
  }
};
