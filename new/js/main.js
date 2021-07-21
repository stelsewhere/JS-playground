// Search

var search = function() {
    document.getElementById("show").classList.toggle("show-search"); 
    document.getElementById('searchButton').classList.toggle('close-icon');
}

// footer 
/*
let showList = document.querySelectorAll('.show-list');

showList.onclick = function(event) {
    var target = event.target

    document.getElementById('list').classList.toggle('show')
    document.getElementById('show-list').classList.toggle('expanded')
} */


document.querySelectorAll('.footer__title').forEach(item => {
    item.addEventListener('click', event => {
        document.getElementById('list').classList.toggle('show')
        document.getElementById('show-list').classList.toggle('expanded')
    })
})





