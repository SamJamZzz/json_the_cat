const breedName = process.argv[2];
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
  if (error) {
    throw Error('Request failed');
  }
  console.log('statusCode: ', response.statusCode);
  const data = JSON.parse(body);
  if (data.length === 0) {
    throw Error('Requested breed could not be found')
  }
  console.log(data[0].description);
});