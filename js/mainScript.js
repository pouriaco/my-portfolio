
var language = "persian";
const persianVersion = document.querySelectorAll('.persian-version');
const englishVersion = document.querySelectorAll('.english-version');

function languageTranslate() {
    // alert('clicked');
    for (let i of persianVersion) {
        i.classList.toggle('d-none');
    }
    for (let i of englishVersion) {
        i.classList.toggle('d-none');
    }
}