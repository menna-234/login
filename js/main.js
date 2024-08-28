"use strict";
var userdata=[];

var username=document.getElementById("userName");
var Email=document.getElementById("Email");
var PhoneNumber=document.getElementById("Phone-Number");
var password=document.getElementById("password");

function signup(){
if (validdataname()&validdataphone()&validdatapassword()&validdataemail()){
var user={
    name:username.value,
    Email:Email.value,
    Phone:PhoneNumber.value,
    password:password.value,
}
userdata.push(user)
localStorage.setItem("userdata",JSON.stringify(userdata));
window.location.href = 'index2.html';

}}
function validdataname(){
    var regex = /^\w{1,}$/
    if (regex.test(username.value)){
        username.style.border="none";
        document.getElementById("valid").classList.add("d-none");
        return true ;
    }
    else{
        username.style.border="solid  2.5px red";
        document.getElementById("valid").classList.remove("d-none");
        return false;
    }
    }
    function validdataphone(){
        var regex = /^01(2|5|0|1)[0-9]{8}$/
        if (regex.test(PhoneNumber.value)){
            PhoneNumber.style.border="none";
            document.getElementById("validnumber").classList.add("d-none");
            return true ;
        }
        else{
            PhoneNumber.style.border="solid  2.5px red";
            document.getElementById("validnumber").classList.remove("d-none");
            return false;
        }
    }
    function validdatapassword(){
        var regex = /^\S{1,}$/
        if (regex.test(password.value)){
            password.style.border="none";
            document.getElementById("validpassword").classList.add("d-none");
            return true ;
        }
        else{
            password.style.border="solid  2.5px red";
            document.getElementById("validpassword").classList.remove("d-none");
            return false;
        }
    }
    function validdataemail(){
        var regex = /^\w*@(gmail|yahoo)\.com$/
        if (regex.test(Email.value)){
            Email.style.border="none";
            document.getElementById("validemail").classList.add("d-none");
            return true ;
        }
        else{
            Email.style.border="solid  2.5px red";
            document.getElementById("validemail").classList.remove("d-none");
            return false;
        }
    }
function logout(){
    window.location.href=`index1.html`
}
var use= JSON.parse(localStorage.getItem(`userdata`))
