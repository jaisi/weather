"use strict"
console.log("i am in domhandler.js");




$("#sel-weather").change( () => {
	let zip = $("#zipcode").val();
	console.log("zip", zip);
	console.log("select list changed");
	let w = $("select option:selected").text();
	Weather.loadWeather(w,zip);	
});
