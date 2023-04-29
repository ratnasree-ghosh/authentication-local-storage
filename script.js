var count = 0;
document.getElementById("sign-btn").addEventListener("click", ()=>{
    // e.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var passsword = document.getElementById("pass").value;
    var confirm_pass = document.getElementById("confirm-pass").value;

    console.log(username,passsword,email,confirm_pass);

    if(username==""|| email=="" || passsword=="" || confirm_pass==""){
        if(document.getElementById("success").style.display=="flex"){
            document.getElementById("success").style.display="none";
        }
       
       document.getElementById("err").style.display="flex";
    }else{
        if(document.getElementById("err").style.display=="flex"){
            document.getElementById("err").style.display="none";
        }
        
        document.getElementById("success").style.display="flex";

        
        var obj = {fullname: username, email: email, passsword: passsword};
        
        var obj2= JSON.stringify(obj);

        localStorage.setItem("user", obj2);
        

        


        // var obj = JSON.parse(localStorage.getItem("user"));
        
        // var n = obj.fullname ;
        // var e = obj.email;
        // var pass = obj.passsword;

        // function call(n,e,pass){

        // }

    }
})
    


