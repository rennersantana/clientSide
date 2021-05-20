/* password validation */
function _id(name) {
  return document.getElementById(name);
}
function _class(name) {
  return document.getElementsByClassName(name);
}
_class("toggle-password")[0].addEventListener("click", function () {
  _class("toggle-password")[0].classList.toggle("active");
  if (_id("password-field").getAttribute("type") == "password") {
    _id("password-field").setAttribute("type", "text");
  } else {
    _id("password-field").setAttribute("type", "password");
  }
});

_id("password-field").addEventListener("focus", function () {
  _class("password-policies")[0].classList.add("active");
});
_id("password-field").addEventListener("blur", function () {
  _class("password-policies")[0].classList.remove("active");
});

_id("password-field").addEventListener("keyup", function () {
  let password = _id("password-field").value;

  if (/[A-Z]/.test(password)) {
    _class("policy-uppercase")[0].classList.add("active");
  } else {
    _class("policy-uppercase")[0].classList.remove("active");
  }

  if (/[0-9]/.test(password)) {
    _class("policy-number")[0].classList.add("active");
  } else {
    _class("policy-number")[0].classList.remove("active");
  }

  if (/[^A-Za-z0-9]/.test(password)) {
    _class("policy-special")[0].classList.add("active");
  } else {
    _class("policy-special")[0].classList.remove("active");
  }

  if (password.length > 7) {
    _class("policy-length")[0].classList.add("active");
  } else {
    _class("policy-length")[0].classList.remove("active");
  }
});
/* ===end of password validator===*/


/*Start the randon user Fetch API*/

//Get Btn And Create Function
document.getElementById('myBtn').addEventListener('click', getData);
function getData() {

  //Get API
  fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => {

      let author = data.results;
    
      //Get Data Value
      let output = `<div class="d-flex">`;

      //Get Data Loop Through
      author.forEach(function (lists) {
        output += ` <div class="card" style="width: 18rem;">
                      <img class="card-img-top" src="${lists.picture.large}"" alt="Card image cap">
                      <div class="card-body">
                <h5 class="card-title">Name: ${lists.name.first}</h5>
                <ul class="list-group">
                    <li class="list-group-item">Phone Number: ${lists.cell}</li>
                 </ul>
              </div>
            </div>`;
      });
      output += `</div><div class="d-block"><button class="btn btn-warning" id="close_button" onclick="closeUsers()" style="margin-bottom: 12px;">Close</button></div>`;
      //Show On Our Screen All Data
      document.getElementById('output').innerHTML = output;

    });
};
function closeUsers() {
  document.getElementById('output').innerHTML = "";
}

/*========Table content start*/
var total_items = 13;

function CalculateItemsValue(e) {

  var totalMain = 0;
  var totalStarter = 0;
  var totalDrinks = 0;
  var totalDesserts = 0;
  var totalVeg = 0;

  for (var i = 1; i <= total_items; i++) {
    var id = "qnt_" + i;


    var item = document.getElementById(id);
    var itemClass = item.className;
    var itemQuant = parseInt(item.value);
    var itemPrice = parseInt(item.getAttribute("data-price"));


    if (itemClass === "main") {
      totalMain += itemQuant * itemPrice;
    }
    else if (itemClass === "starters") {

      totalStarter += itemQuant * itemPrice;
    }
    else if (itemClass === "drinks") {

      totalDrinks += itemQuant * itemPrice;
    }
    else if (itemClass === "desserts") {

      totalDesserts += itemQuant * itemPrice;
    }

    else if (itemClass === "vegetarian") {

      totalVeg += itemQuant * itemPrice;
    }


    document.getElementById('ItemsTotalMain').innerHTML = "€" + totalMain;
    document.getElementById('ItemsTotalStarter').innerHTML = "€" + totalStarter;
    document.getElementById('ItemsTotalDrinks').innerHTML = "€" + totalDrinks;
    document.getElementById('ItemsTotalDesserts').innerHTML = "€" + totalDesserts;
    document.getElementById('ItemsTotalVeg').innerHTML = "€" + totalVeg;
  


    document.getElementById('ItemsTotal').innerHTML = "€" + (totalMain + totalStarter + totalDrinks + totalDesserts + totalVeg);
  }
}

document.querySelectorAll('[id^="qnt_"]').forEach(item => {
  item.addEventListener('keyup', function (e) {
    if (e.keyCode === 13)
      CalculateItemsValue(e)

  });

});
/*========Table content end*/
