export default axios => ({
  list() {
    return axios.get("/api/users/index");
  },
});
