function loginUser(email,password){
    let user = {email:"",password:""};
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("UserLoggedIn");
                user["email"] = email;
                user["password"] = password;
                resolve(user);
            },5000);
    });
}


function getUserVedios(email){
    let vedios = [];
        return new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        console.log("We are in getUserVedio Details",email);
                      vedios  = ["AlaVaikuntaPuramLo","Banni","Badri"];
                      resolve(vedios);
                    },3000);
                    });
}

function vedioDetails(vedioName){
            return new Promise((resolve,reject)=>{
                        setTimeout(()=>{
                            console.log("vedioName-->",vedioName);     
                        },2000);
                });
}
/*
function getUserVedioDetails(email,password){
    //"ram@gmail.com","ramesh"
  /*  const user   = loginUser(email,password,user=>{
                         console.log("User Details ",user);
                             getUserVedios(user.email,vedios=>{
                                        console.log("vedios ",vedios);
                                        vedioDetails(vedios[0]);
                                
                                    });
                    });   */
    
/*   loginUser(email,password).then((user)=>getUserVedios(user.email))
                            .then((vedios)=>vedioDetails(vedios[0])); 
}
*/

async function getUserVedioDetails(email,password){
	console.log(email,password);
	 let user         = await loginUser(email,password);
	 let vedios       = await getUserVedios(user.email);
	 let vediodet = await vedioDetails(vedios[0]);
	console.log(vediodet);
}

//getUserVedioDetails("ram@gmail.com","ramesh");



//yield 
function* getUserVideoDetailsGenerator(email,password){
	
	 let user         = yield loginUser(email,password);
	
	 let vedios       = yield getUserVedios(user.email);
	 let vediodet     = yield vedioDetails(vedios);
	 console.log(vediodet);
	
}

var iterator = getUserVideoDetailsGenerator("ram@gmail.com","ramesh");

getUserVedioDetails_Iterator(iterator);
function getUserVedioDetails_Iterator(iterator){
	console.log(iterator);
     iterator.next()
	         .value
			 .then((user)=>{
					iterator.next(user)
				        .value
						.then((vedios)=>iterator.next(vedios))
						}
				  );
                        //.then()
						//.then(func=>iterator.next(func));
						
						;
}
