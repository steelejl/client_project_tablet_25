
function myFunction() {
  var x = document.getElementById("navBar");
  if (x.className === "new-nav") {
    x.className += " responsive";
  } else {
    x.className = "new-nav";
  }
}