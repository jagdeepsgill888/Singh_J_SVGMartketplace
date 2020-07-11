(()=> {
  console.log('fired!');

  const checkbox = document.getElementById('toggle');// toggle dark /light button

// this is where you select elements here
 let theBagdes = document.querySelectorAll(".cat"),
    svgBadge=document.querySelector("svg");
    mainHeading= document.querySelector("#mainHeading");
 // debugger;   pause ur code execution here //

  function logID() {
    console.log("clicked on a graphic - this one: ", this.id);
    this.classList.add("selected");
  }

  theBagdes.forEach(badge => badge.addEventListener("click", logID));




  //  function  clearSelection() {
  //  }

 checkbox.addEventListener('change', () => {
    document.body.classList.toggle('darkTheme');
  }); // change background colour from from light to dark theme




}) ();
