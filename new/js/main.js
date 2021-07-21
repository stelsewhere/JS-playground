// Search

var search = function() {
    var isSearchActive = true;

    if (isSearchActive) {
        document.getElementById("show").classList.toggle("show-search"); 
        document.getElementById('searchButton').classList.toggle('close-icon');
    } 
}

// footer
let showList = document.querySelector('.footer__top');

showList.onclick = function(event) {
    var target = event.target

    document.getElementById('list').classList.toggle('show')
    document.getElementById('show-list').classList.toggle('expanded')

}
    






