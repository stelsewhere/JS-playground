
// Menu

function openNav() {
    document.getElementById('overlay').style.width = "100%";
}

function closeNav() {
    document.getElementById('overlay').style.width = "0%";
}


// Search

var search = function() {
    document.getElementById("show").classList.toggle("show-search"); 
    document.getElementById('searchButton').classList.toggle('close-icon');
}


// footer 

var showList = document.getElementsByClassName("footer__title");
var i;

for (i = 0; i < showList.length; i++) {
  showList[i].addEventListener("click", function() {
    this.classList.toggle("show");
    this.classList.toggle('expanded');
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      
    }
  });
}


// Menu navigation

document.querySelectorAll('.nav__item--level-1').forEach(item => {
	item.addEventListener('click', event => {
		document.getElementById('level2').style.display = "block"
    document.getElementById('level1').style.display = "none"
	})
})

document.querySelectorAll('.nav__item--level-2').forEach(item => {
	item.addEventListener('click', event => {
		document.getElementById('level3').style.display = "block"
    document.getElementById('level2').style.display = "none"
	})
})


var backToLevelOne = document.querySelector('.caption-level-2');
var backToLevelTwo = document.querySelector('.caption-level-3');

backToLevelOne.onclick = function() {
  document.getElementById('level2').style.display = "none"
  document.getElementById('level1').style.display = "block"
  document.getElementById('level3').style.display = "none"
}

backToLevelTwo.onclick = function() {
  document.getElementById('level3').style.display = "none"
  document.getElementById('level2').style.display = "block"
}

