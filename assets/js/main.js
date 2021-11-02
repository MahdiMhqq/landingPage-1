function menuExpand() {
  x = document.getElementById("nav");
  if (x.className === "close") {
    x.className += " responsive";
  } else {
    x.className = "close";
  }
}
