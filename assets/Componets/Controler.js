var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://mohd-firdaus-reqres-v1.p.rapidapi.com/api/users',
  params: {page: '1'},
  headers: {
    'x-rapidapi-key': '4467badd0dmsh6fd41473703c992p1a48dajsn1600fb380b5c',
    'x-rapidapi-host': 'mohd-firdaus-reqres-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});