function _id(name){
  return document.getElementById(name);
}
function _class(name){
  return document.getElementsByClassName(name);
}
_class("toggle-password")[0].addEventListener("click",function(){
  _class("toggle-password")[0].classList.toggle("active");
  if(_id("password-field").getAttribute("type") == "password"){
    _id("password-field").setAttribute("type","text");
  } else {
    _id("password-field").setAttribute("type","password");
  }
});

_id("password-field").addEventListener("focus",function(){
  _class("password-policies")[0].classList.add("active");
});
_id("password-field").addEventListener("blur",function(){
  _class("password-policies")[0].classList.remove("active");
});

_id("password-field").addEventListener("keyup",function(){
  let password = _id("password-field").value;
  
  if(/[A-Z]/.test(password)){
    _class("policy-uppercase")[0].classList.add("active");
  } else {
    _class("policy-uppercase")[0].classList.remove("active");
  }
  
  if(/[0-9]/.test(password)){
    _class("policy-number")[0].classList.add("active");
  } else {
    _class("policy-number")[0].classList.remove("active");
  }
  
  if(/[^A-Za-z0-9]/.test(password)){
    _class("policy-special")[0].classList.add("active");
  } else {
    _class("policy-special")[0].classList.remove("active");
  }
  
  if(password.length > 7){
    _class("policy-length")[0].classList.add("active");
  } else {
    _class("policy-length")[0].classList.remove("active");
  }
});


//code for random user API

//Get Btn And Create Function
document.getElementById('myBtn').addEventListener('click', getData);

function getData() {
  // console.log('test');

  //Get API
  fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => {
          // console.log(data);

          let author = data.results;
          // console.log(author);

          //Get Data Value
          let output = "";

          //Get Data Loop Through
          author.forEach(function (lists) {
              output += `
              <div class="container">
                  <div class="card mt-4 bg-light">
                      <ul class="list-group">
                          <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
                          <li class="list-group-item"><img src="${lists.picture.large}"></li>
                          <li class="list-group-item">Phone Number: ${lists.cell}</li>
                          <li class="list-group-item">DOB: ${lists.dob.date}</li>
                          <li class="list-group-item">Age: ${lists.dob.age}</li>
                          <li class="list-group-item">Email ID: ${lists.email}</li>
                          <li class="list-group-item">Gender: ${lists.gender}</li>
                          <li class="list-group-item">City: ${lists.location.city}</li>
                          <li class="list-group-item">Country: ${lists.location.country}</li>
                          <li class="list-group-item">PostCode: ${lists.location.postcode}</li>
                      </ul>
                  </div>
              </div> `;
          });

          //Show On Our Screen All Data
          document.getElementById('output').innerHTML = output;

      });
};