const textArea = document.querySelector('#floatingTextarea2');
const msgLimit = document.querySelector('#massage-limit');

const textArea2 = document.querySelector('#floatingTextarea4');
const msgLimit2 = document.querySelector('#massage-limit2');


textArea.addEventListener('input', () => {
    let textLength = textArea.value.length;
    let limit = 200 - textLength;
    msgLimit.innerHTML = "تعداد حرف مجاز باقی مانده (" + limit + ")";
})

textArea2.addEventListener('input', () => {
    let textLength = textArea2.value.length;
    let limit = 200 - textLength;
    msgLimit2.innerHTML = "letters (" + limit + ")";
})