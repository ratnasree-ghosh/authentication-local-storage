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
       document.getElementById("my-form").action = "";
    }else{
        if(document.getElementById("err").style.display=="flex"){
            document.getElementById("err").style.display="none";
        }

        if(passsword!=confirm_pass){
            alert("Password is not correct!");
            document.getElementById("my-form").action = "";

        }else{
            document.getElementById("success").style.display="flex";
        document.getElementById("my-form").action = "./profile.html";

        
        var obj = {fullname: username, email: email, passsword: passsword};
        
        var obj2= JSON.stringify(obj);

        localStorage.setItem("user", obj2);
        }
        
    }
})
    


