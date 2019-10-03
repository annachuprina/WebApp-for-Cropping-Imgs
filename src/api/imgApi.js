class imgApi {
    static getAllCats() {
      return fetch('http://localhost:3000/api/v1/imgs').then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
}
export default imgApi;