import axios from "axios";

export default {
  // Gets all books
  getCards: function() {
    return axios.get("/api/cards");
  },

  getUserData: function() {
    return axios.get("/api/user");
  },

  getGames: function() {
    return axios.get("/api/games");
  },

  createGame: function() {
    return axios.post("/api/games");
  }
};
