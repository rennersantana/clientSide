window.onload = function() {

var state = false;
var password = document.getElementById('password');
var passwordStrength = document.getElementById('password-strength');
var lowerUppercase = document.getElementsByClassName('low-upper-case')[0];
var number = document.getElementsByClassName('one-number')[0];
var specialChar = document.getElementsByClassName('one-special-char')[0];
var eightChar = document.getElementsByClassName('eight-character')[0];


let icon = document.getElementById("icon");

icon.addEventListener("click",function(e){
    if(state){
        icon.setAttribute("class", 'far fa-eye');
        password.setAttribute("type", "password");
        state = false;
    }
 
else {
    password.setAttribute("type", "text");
    icon.setAttribute("class", 'fas fa-eye-slash');
    state = true;
    }
});


password.addEventListener('keyup',function(){
    let pass = password.value;
    checkStrength(pass); 
})

function checkStrength(password){
    let strength = 0;
    if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        strength += 1;
        
        lowerUppercase.classList.remove('fa-circle');
        lowerUppercase.classList.add('fa-check');
    }
    else{
        lowerUppercase.setAttribute("class", 'fas fa-circle');
       lowerUppercase.classList.add('fa-circle');
        lowerUppercase.classList.remove('fa-check');
    }
    if(password.match(/([0-9])/)){
        strength += 1;
        number.classList.remove('fa-circle');
        number.classList.add('fa-check');
    }
    else{
        number.classList.add('fa-circle');
        number.classList.remove('fa-check');
    }
    if(password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){
        strength += 1;
        specialChar.classList.remove('fa-circle');
        specialChar.classList.add('fa-check');
    }
    else{
        specialChar.classList.add('fa-circle');
        specialChar.classList.remove('fa-check');
    }
    if(password.length > 7){
        strength += 1;
        eightChar.classList.remove('fa-circle');
        eightChar.classList.add('fa-check');
    }
    else{
        eightChar.classList.add('fa-circle');
        eightChar.classList.remove('fa-check');
    }
    if(strength == 0){
        passwordStrength.style = 'width: 0%';
    }
    else if(strength == 2){
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.add('progress-bar-danger');
        passwordStrength.style = 'width: 10%';
    }
    
    else if(strength == 3){
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.style = 'width: 60%';
    }
    else if(strength == 4){
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.style = 'width: 100%';
    }

}
}
