/** @format */
// Google Map
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
// Google Map
//Validation

document.querySelector(".btn").addEventListener("click", function() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let comment = document.getElementById("textarea").value;
  // Name Validation
  let userNameVal = /^[a-zA-Z][^0-9]{2,9}$/gi;
  if (userNameVal.test(name) && name != "") {
    name = name;
    document.querySelector(".errorNameMessage").classList.add("d-none");
  } else {
    document.querySelector(".errorNameMessage").classList.remove("d-none");
    // document.querySelector(".userNameError").classList.add("d-block");
    document.querySelector(".errorNameMessage").classList.add("text-danger");
  }
  // Name Validation End
  // Email Validation
  let emailVal = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]{3,5}).([a-zA-z]{2,3})(.[a-zA-Z]{2,3})?$/;
  if (emailVal.test(email) && email != "") {
    email = email;
    console.log("valid Email!!");
    document.querySelector(".errorEmailMessage").classList.add("d-none");
  } else {
    document.querySelector(".errorEmailMessage").classList.remove("d-none");
    document.querySelector(".errorEmailMessage").classList.add("text-danger");
  }
  //Email Validation End
  var form = document.querySelector(".form");
  form.addEventListener("submit", function() {
    // console.log(name + " " + email + " " + comment);
    console.log("submitted");
  });
});

//Validation
//Submit
