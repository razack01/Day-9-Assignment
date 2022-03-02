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
	console.log(data)
	var popu=data.filter((element)=>element.population<200000)
	for(let i=0;i<popu.length;i++){
		console.log(popu[i].name)
 }
	}






