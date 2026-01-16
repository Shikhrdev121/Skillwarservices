function toggleMenu(){
  var menu = document.getElementById("navMenu");
  if(menu.style.display === "block"){
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
  fetch("https://script.google.com/macros/s/AKfycbzWoGO1Vg48Wqig5cFFoohoeQegDvL7d-v3wLtnOnojCMA6Ypf3J2SEeqnE68bJCKi6/exec", {
    method: "POST",
    body: new FormData(form)
  })
  .then(() => {
    form.reset();
    thankYouMsg.style.display = "block";

    // optional: hide after 5 seconds
    setTimeout(() => {
      thankYouMsg.style.display = "none";
    }, 5000);
  })
  .catch(() => {
    alert("❌ Something went wrong. Please try again.");
  });
});
</script>



