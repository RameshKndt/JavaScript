
function registerFunc(){
	//Register 
	let url = "https://reqres.in/api/register";
	//let url = "https://localhost:9090/register"
	let method ="POST";
	let data = "";
	/*{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
    } */
	let email = document.getElementById("email_id").value;
	let password = document.getElementById("password_id").value;
	
	data = {
    "email": email,
    "password": password
		};
		registrationProcess(url,method,JSON.stringify(data));
	/*let result = createAjaxFunc(url,method,JSON.stringify(data)).then(getUserDetails,handleAjaxFailure);
	console.log("The result from register function is "+result); */
}
function handleAjaxSuccess(result){
	return result;
}
function handleAjaxFailure(failureReason){
	
	console.log(failureReason);
}

function createAjaxFunc(url,method,data){
	
	return new Promise(function(resolve,reject){
		
		//xmlhttpRequest object
		//register for the event
		//open
		//send 
		let request = new XMLHttpRequest();
		 request.open(method, url, true);
		 request.responseType = 'json';
		 request.setRequestHeader("Content-Type","application/json");
         request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve(request.response);
        } else if(request.status === 400){
          reject(new Error(request.status));
        }
      }
    };
    request.onerror = function() {
      reject(new Error("Network Error"));
    };
    
    request.send(data);
		
	});
}
function getUserDetails(userid){
	//userid=acvcdf;
	let url = "https://reqres.in/api/users/"+userid;
	let method ="GET";
	let data = "";
	//createAjaxFunc(url,method,data).then(processResult);
	return createAjaxFunc(url,method,data);
}
function processResult(response){
	console.log("UserResponse is --->"+response);
	
	document.getElementById("user_details_paragraph").innerHTML = JSON.stringify(response);
	
}

 function registrationProcess(url,method,data){
	
	createAjaxFunc(url,method,data).then(response=>{  
	                                     console.log(response)
									      return response.id;
										  })
							        .then((user)=>{
										
										return getUserDetails(user);
									  })
									.then((response)=>{
										processResult(response);
									}).catch(error=>{
										
										console.log("Catch Function:--->"+error);
									});
	
}