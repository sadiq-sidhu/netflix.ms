function printError(id,msg){
    document.getElementById(id).innerHTML =msg;
}

function validate(){
    var email = document.getElementById("email");
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    var emailErr=true;
    if(email.value ==""){
        printError("emailErr","This field is required");
        return false;
    }
   
    if(email.value.match(mailformat))
      {  
        printError("emailErr","You have entered a valid email address!");    //The pop up alert for a valid email addres
        return true;
      }
    else
      {
        printError("emailErr","You have entered a invalid email address!");//The pop up alert for an invalid email address
        return false;
      }
}


function clickFn1(){
  
  var element1 = document.getElementById("clickFn1");
  element1.style.display="block";
}
function close1(){
  var element1 = document.getElementById("clickFn1");
  element1.style.display="none";
}
function clickFn2(){
  var element2 = document.getElementById("clickFn2");
  element2.style.display="block";
}
function close2(){
  var element2 = document.getElementById("clickFn2");
  element2.style.display="none";
}
function clickFn3(){
  
  var element3 = document.getElementById("clickFn3");
  element3.style.display="block";
}
function close3(){
  var element3 = document.getElementById("clickFn3");
  element3.style.display="none";
}