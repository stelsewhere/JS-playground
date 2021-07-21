var showList = document.querySelectorAll('.footer__title');

showList.forEach(el => {
    el.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('footer__list')
    });
});

/*по клику на иконку Поиск открыть блок

если блок открыт, иконка Поиска скрыта, иконка Крестик показана;
если блок скрыт, иконка Поиска показана, иконка Крестик скрыта

по клику на Крестик - блок скрыт */


var search = function() {
    var isSearchActive = true;

    if (isSearchActive = true) {
        document.getElementById("show").classList.add("show-search"); 
        document.getElementsById('searchButton').classList.add('close-icon')
    } else {
        document.getElementById("show").classList.remove("show-search");
    }
}




