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
  // console.log('test');

  //Get API
  fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => {
      // console.log(data);

      let author = data.results;
      console.log(author);

      //Get Data Value
      let output = "";

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

      //Show On Our Screen All Data
      document.getElementById('output').innerHTML = output;

    });
};

/*========Table content start*/
var total_items = 5;


function CalculateItemsValue() {
    var total = 0;
    var totalMain = 0;
    var totalStarter = 0;

    for (let i = 1; i <= total_items; i++) {
        itemID = document.getElementById("qnt_" + i);

        if (itemID.className == "main") {

            totalMain += parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        }
        if (itemID.className == "starters") {

            totalStarter += parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        }

    }
    document.getElementById('ItemsTotal').innerHTML = "€" + (totalMain + totalStarter);
    document.getElementById('ItemsTotalMain').innerHTML = "€" + totalMain;
    document.getElementById('ItemsTotalStarter').innerHTML = "€" + totalStarter;

}

document.querySelectorAll('[id^="qnt_"]').forEach(item => {
    item.addEventListener('keyup', CalculateItemsValue);
});
/*========Table content start*/