function jsonp(url,callback,data){
	data = data ? data : {};
	var str = "";
	for(var i in data){
		str += `${i}=${data[i]}&`;
	}
	var d = new Date();
	url = url + "?" + str + "__qft=" + d.getTime();
	
	var script = document.createElement("script");
	script.src = url;
	document.body.appendChild(script);
			
	window[data[data.columnName]] = function(res){
		callback(res);
	}
}

// function jsonp(url,callback,data){
// 	data = data ? data : {} ;
// 	var str = "";
// 	for(var i in data ){
// 		str += `${i}=${data[i]}&`
// 	}
// 	var d = new Date();
// 	url = url + "?" + str + "__qft=" + d.getTime();

// 	var script = document.createElement("script");
// 	script.src = url;
// 	document.body.appendChild(script);

// 	window[data[data.columnName]]=function(res){
// 		callback(res)
// 	}
// }

// function jsonp(url,callback,bata){
// 	data = data ? data : {};
// 	var str = "";
// 	for(var i in data){
// 		str += `${i}=${data[i]}&`
// 	}
// 	var d = new Date();
// 	url = url + "?" + str + "__qft=" + d.getTime();

// 	var script = document.createElement("script");
// 	script.scr = url ;
// 	document.body.appendChild(script);
// 	window[data[data.columnName]] = function(res){
// 		callback(res)
// 	}
// }

// function jsonp(url,callback,data){
// 	data = data ? data : {};
// 	var str = "";
// 	for(var i in data ){
// 		str = str + `${i}=${data[i]}&`
// 	}
// 	var d = new Date();
// 	d = url + "?" + str + "__qft=" + d.getTime();

// 	var script = document.createElement("script");
// 	script.scr = url;
// 	document.body.appendChild(script);
// 	window[data[data.columnName]] = function(res){
// 		callback(res)
// 	}
// }
// function jsonp(url,callback,data){
// 	data = data ? data : {};
// 	var str = "";
// 	for(var i in data){
// 		str += `${i}=${data[i]}`
// 	}
// 	var d = new Date();
// 	d = url + "?" + str + "__qft=" + d.getTime();

// 	var script = document.queryElement("script");
// 	script.str = url;
// 	document.body.appendChild(script)
// 	window[data[data.columnName]] = function(res){
// 		callback(res);
// 	}
// }

// function jsonp(url,callback,data){
// 	data = data ? data : {};
// 	var str = "";
// 	for(var i in data ){
// 		str = `${i}=${data[i]}&`;
// 	}
// 	var d = new Date();
// 	d = url + "?" + str + "__qft" + d.getTime();
// 	var script = document.queryElement("script");
// 	script.str = url;
// 	document.body.appendChild(script);
// 	window[data[data.columnNane]] = function(sre){
// 		callback(sre);
// 	}
// }