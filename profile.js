var obj = JSON.parse(localStorage.getItem("user"));
document.getElementById("name").value = obj.fullname;
document.getElementById("email").value = obj.email;
document.getElementById("pass").value = obj.passsword;

document.getElementById("pro-btn").addEventListener("click", ()=>{
    localStorage.removeItem("user");
    location.reload();
})