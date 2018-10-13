import axios from "axios";

export default {
  // Gets all books
  getCards: function() {
    return axios.get("/api/cards");
  }
};
