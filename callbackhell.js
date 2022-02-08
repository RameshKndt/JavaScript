function loginUser(email,password,callback){
    let user = {email:"",password:""};
    setTimeout(()=>{
        console.log("UserLoggedIn");
        user["email"] = email;
        user["password"] = password;
        callback(user);
    },5000);
    return user;
}


function getUserVedios(email,callback){
    let vedios = [];
    setTimeout(()=>{
        console.log("We are in getUserVedio Details",email);
      vedios  = ["AlaVaikuntaPuramLo","Banni","Badri"];
      callback(vedios);
    },3000);
    return vedios;
}

function vedioDetails(vedioName){
    setTimeout(()=>{
        console.log("vedioName-->",vedioName);     
    },2000);
    
}
function getUserVedioDetails(email,password){
    //"ram@gmail.com","ramesh"
    const user   = loginUser(email,password,user=>{
                         console.log("User Details ",user);
                             getUserVedios(user.email,vedios=>{
                                        console.log("vedios ",vedios);
                                        vedioDetails(vedios[0]);
                                
                                    });
                    });   
    // const vedios = getUserVedios(user.email);
    // vedioDetails(vedios[0]);
}

getUserVedioDetails("ram@gmail.com","ramesh");