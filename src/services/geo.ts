import makeRequest from "utils/makeRequest";

const geoService = {
  getStations: (city?) =>
    makeRequest(`/geo/data/subwayStations?city=Москва`, "GET"),
  getCities: () => makeRequest(`/geo/data/cities`, "GET"),
  getSuggest: (address) =>
    makeRequest(`/geo/data/suggest?address=${address}`, "GET"),
};

export default geoService;
