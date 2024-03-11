const slider = document.querySelector('.fav-btn');
const facIcon = document.querySelector('#fav-icon');
var color = 'isWhite';

function setFavIcon() {
    slider.classList.toggle('btn-success');
    slider.classList.toggle('btn-dark');

    if (color=='isWhite') {
        facIcon.setAttribute('href','./asset/logo-dark.png');
        color='isBlack';
    }
    else{
        facIcon.setAttribute('href','./asset/logo.png');
        color='isWhite';
    }
}
function setFavIconInPage() {
    slider.classList.toggle('btn-success');
    slider.classList.toggle('btn-dark');

    if (color=='isWhite') {
        facIcon.setAttribute('href','../asset/logo-dark.png');
        color='isBlack';
    }
    else{
        facIcon.setAttribute('href','../asset/logo.png');
        color='isWhite';
    }
}