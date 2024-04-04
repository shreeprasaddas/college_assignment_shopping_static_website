var fname= document.getElementById('name');
let error= document.getElementById("name-error");

console.log(fname);
fname.addEventListener("keyup",function(){
    if(fname.value.length<=4){
        error.innerHTML= "Error lenth";
    }
    else{
        error.innerHTML="";
    }
});

let email = document.getElementById("email");
let form= document.getElementById("form");
console.log(form);

form.addEventListener("submit",function(e){
    if(email.value.length <= 5){
        e.preventDefault();
        alert("please enter vailed email");

    }
});

email.addEventListener("keyup",function(e){
    if(email.indexOf('@') == -1){
        document.getElementById('e-error').innerText="at least '@' one required";
        e.preventDefault();
    }
    else if(email.indexOf('.') == -1){
        document.getElementById('e-error').innerText="at least '.' one required";
        e.preventDefault();
    }
    else{
        document.getElementById('e-error').innerText="";
    }

});
