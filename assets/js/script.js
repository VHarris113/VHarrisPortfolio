// var i = 0; //START
// var images = [];
// var time = 6000;

// //Image List

// images[0] = "assets/Images/ProjectImgs/poketradeio.png";
// images[1] = "./assets/Images/ProjectImgs/workdayscheduler.png";
// images[2] = "./assets/Images/ProjectImgs/passwordgenerator.png";
// images[3] = "./assets/Images/ProjectImgs/Horiseoncoderefractor.png";
// images[4] = "./assets/Images/ProjectImgs/screencapture-scratch-mit-edu-projects-494046636-fullscreen-2021-04-05-21_22_38.png"

// // change image
// function changeImg() {
//     document.slide.src = images[i];

//     if (i < images.length -1){
//         i++;
//     } else {
//         i = 0;
//     }

//     setTimeout("changeImg()", time);
// }

// window.onload = changeImg;

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("words");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

