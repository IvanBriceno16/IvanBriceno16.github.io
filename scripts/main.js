let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/toad.jpeg') {
      myImage.setAttribute('src','images/matterhorn.jpeg');
    } else {
      myImage.setAttribute('src','images/toad.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Chief Toad welcomes, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Chief Toad welcomes, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

  function setUserName() 