var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?';
const OPEN_WEATHER_DEFAULT_PARAMS = 'units=metric&appid=d5a25a5ff1ba155b16056aced8010348';
const OK_CODE = "200";
const OK_MESSAGE = "accurate";

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&${OPEN_WEATHER_DEFAULT_PARAMS}`;

    // return axios.get(requestUrl).then(function(res){
    //   //console.log(res.data);
    //   if(res.data.cod && res.data.message){
    //     throw new Error(res.data.message);
    //   }else{
    //     return res.data.main.temp;
    //   }
    // },function(res){
    //   throw new Error(res.data.message);
    // });

    return axios.get(requestUrl).then(
      function (res) {
        //console.log('OK:' + res.data.cod);
        //debugger;
        if (res.data.cod != OK_CODE && res.data.message != OK_MESSAGE) {
          throw new Error(res.data.message);
        } else {
          return res.data.list[0].main.temp;
        }
      },
      function (res)
      {
        //console.log('WRONG:' + res.data.message);
        throw new Error(res.data.message);
      }
    );
  }
};
