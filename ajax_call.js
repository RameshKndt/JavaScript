

document.getElementById("users_button").addEventListener("click",getUserDetails);


function getUserDetails(){

   makeAjaxCall(processResponse);
    
    
}
//Callback 
//Functions are objects. can we use the parameter an object.
// function as a parameter to another function.
//Timeouts 
function makeAjaxCall(processResponse){
    
    var request =  new XMLHttpRequest(); //readyState = 0
    
   request.open("GET","https://reqres.in/api/users"); //readyState =1;
   
   request.onreadystatechange = function (){
        console.log("readyState Value",request.readyState);
        if(request.readyState == 4){
            
            console.log("Request Status Code ", request.status);
            console.log("Request Status Text ", request.statusText);
            console.log(request.response);
            console.log("Content-Type",request.getResponseHeader("Content-Type"));
            //Process the response  and display the data
                processResponse(request.response);    
            //End
        }
         
   } ;
   request.send(null);
    
}
function processResponse(response){
    
    console.log(response);
    let responseObj = JSON.parse(response);
    
    console.log(responseObj);
    let usersArray = responseObj.data; 
    // Map each array object to HTML data
   let usersDivArray =  usersArray.map(result=> {
		 return (`<div class='user-div'>
			<div> <img src=${result.avatar}></img>  </div>
			<h1> ${result.first_name}  ${result.last_name}</h1>
			<h3> ${result.email}</h3>
		</div>`);
	}
	);
	var resultsDiv = document.getElementById("results");
	resultsDiv.innerHTML = usersDivArray.join(" ");
	    
}