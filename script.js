function toggleMenu(){
  var menu = document.getElementById("navMenu");
  if(menu.style.display === "block"){
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
    const form = document.getElementById("contactForm");
const msg = document.getElementById("thankYouMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch(""https://script.google.com/macros/s/AKfycbzWoGO1Vg48Wqig5cFFoohoeQegDvL7d-v3wLtnOnojCMA6Ypf3J2SEeqnE68bJCKi6/exec"", {
    method: "POST",
    body: new FormData(form)
  })
  .then(() => {
    form.reset();
    msg.style.display = "block";
    setTimeout(() => msg.style.display = "none", 5000);
  })
  .catch(() => alert("Something went wrong"));
});
