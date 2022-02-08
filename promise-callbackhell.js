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
function getUserVedioDetails(email,password){
    //"ram@gmail.com","ramesh"
  /*  const user   = loginUser(email,password,user=>{
                         console.log("User Details ",user);
                             getUserVedios(user.email,vedios=>{
                                        console.log("vedios ",vedios);
                                        vedioDetails(vedios[0]);
                                
                                    });
                    });   */
    
   loginUser(email,password).then((user)=>getUserVedios(user.email))
                            .then((vedios)=>vedioDetails(vedios[0])); 
}

getUserVedioDetails("ram@gmail.com","ramesh");