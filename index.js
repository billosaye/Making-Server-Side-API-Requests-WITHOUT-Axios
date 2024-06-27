// Importing the https module for making HTTP requests
const https = require('https');

// URL of the API endpoint
const url = 'https://jsonplaceholder.typicode.com/posts';

// Making a GET request to the public API endpoint
https.get(url, (response) => {
  let data = ''; // Variable to hold the response data

  // Listen for data chunks and append them to the data variable
  response.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  response.on('end', () => {
    try {
      const parsedData = JSON.parse(data); // Parse the response data
      console.log(parsedData); // Handle the response data
    } catch (e) {
      // Handle JSON parsing errors
      console.error('Error parsing the response data:', e);
    }
  });

}).on('error', (error) => {
  // Handle errors that occur during the request
  console.error('Error making the GET request:', error);
});
