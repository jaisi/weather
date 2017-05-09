"use strict";

console.log("main.js");

var Weather = (function (taco) {
     taco.loadWeather = function (weather, zip){
      console.log("weather in loadWeather", weather, zip);
      let url;
      let key = "b2cc3568b8eca236c59c0e673d6ee9b5";
      if(weather === "Current weather data"){
        //console.log("i am here");
        url = "http://api.openweathermap.org/data/2.5/weather?zip="+zip+"&appid="+key;
      }else if (weather === "5 day / 3 hour forecast"){
        url = "http://api.openweathermap.org/data/2.5/forecast?zip="+zip+"&appid="+key;

      }else if (weather === "16 day / daily forecast"){
        url ="http://api.openweathermap.org/data/2.5/forecast/daily?zip="+zip+"&appid="+key;

      }
      console.log("url", url);

      $.ajax({
          url:url,
          success:function(result){
            console.log("got the data", result);
            taco.displayWeather(result);
          }
         });
      };
  return taco;
})(Weather || {});

Weather.loadWeather();





