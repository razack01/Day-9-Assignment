 // create an xhr object
var request=new XMLHttpRequest();
// request a connection(which data you require?)
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// sending a connection request
request.send();
// once the data successfully received
// from the server 200
request.onload=function(){
	var data=JSON.parse(request.response);
	 // console.log(data)

	 // console.log(Object.keys(data))
	 Object.keys(data).forEach((element)=>{
	 	console.log(data[element].name,data[element].capital,data[element].flag)

	 })
	 
	}






