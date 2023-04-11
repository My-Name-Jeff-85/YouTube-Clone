const axios = require("axios");

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
 
  params: {
   
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '858a6fa40emshc04c70a52e19c32p12fd0bjsne6ce2db09c48',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};