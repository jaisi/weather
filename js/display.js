
"use strict";

var Weather = (function (taco) {
 
  taco.displayWeather = function(data) {
  	console.log("within weather function","data",data.weather);
  	let weatherArray=[];
  	var i;
  	for(i in data.weather){
  		console.log(data.weather[i].main, data.weather[i].description);
  		$("#output").html("<h4>" + data.weather[i].main + " , " + data.weather[i].description + "</h4>");
  	}
    
  };


  return taco;
})(Weather || {});