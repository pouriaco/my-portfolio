const gitBtn = document.querySelector('#git-btn');
const gitIco = document.querySelector('#git-ico');

const telBtn = document.querySelector('#tel-btn');
const telIco = document.querySelector('#tel-ico');

const mailBtn = document.querySelector('#mail-btn');
const mailIco = document.querySelector('#mail-ico');

const phnBtn = document.querySelector('#phn-btn');
const phnIco = document.querySelector('#phn-ico');


gitBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('@pouriaco');
    clearClassList(gitIco);
});

telBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('@p_show8418');
    clearClassList(telIco);
});

mailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('p.pouriaco@gmail.com');
    clearClassList(mailIco);
});

phnBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('09157743955');
    clearClassList(phnIco);
});

function clearClassList(btnCheck) {
    gitIco.classList = "bi bi-clipboard text-green";
    telIco.classList = "bi bi-clipboard text-green";
    mailIco.classList = "bi bi-clipboard text-green";
    phnIco.classList = "bi bi-clipboard text-green";
    btnCheck.classList = 'bi bi-clipboard-check text-green';
}