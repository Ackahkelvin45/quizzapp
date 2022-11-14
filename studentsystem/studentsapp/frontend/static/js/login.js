


loginbtn=document.getElementById("login")

loginbtn.addEventListener("click",(e)=>{

  addEventListener("DOMContentLoaded",()=>{
    username=document.getElementById("username")
    password=document.getElementById("passsword")
  })

 userinfo={
  "username": username.value,
  "password": password.value
}

if (userinfo.username===""){
  username.style.borderColor='red'
   username.style.borderWidth="1px"
}
if (userinfo.password===""){
  password.style.borderColor='red'
  password.style.borderWidth="1px"
}
else{

xhr = new XMLHttpRequest
xhr.open("POST","http://127.0.0.1:8000/login/")
xhr.setRequestHeader("Content-type","application/json")
xhr.send(JSON.stringify(userinfo))
xhr.addEventListener("load",()=>{
var token ="token "
if (xhr.status===200){
  re=JSON.parse(xhr.responseText)
  username=re.user_info.username
 
 localStorage.setItem("token",JSON.stringify(token+=re.token))
 localStorage.setItem("username",JSON.stringify(username))
 window.location.href='./index.html'


}
else{
  swal({
    icon: "warning",
    text:"Enter valid credentials",
    timer: 2000
  })
}

})

}

})
