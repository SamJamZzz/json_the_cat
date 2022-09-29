const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback('Request could not be processed', null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('Requested breed could not be found', null);
      return;
    }
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };