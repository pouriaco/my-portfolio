const select = document.querySelector('#filter-select');
const select2 = document.querySelector('#filter-select2');

const completedProjects = document.querySelectorAll('.done');
const unCompletedProjects = document.querySelectorAll('.working');

select.addEventListener('change', () => {
    let value = select.value;

    switch (value) {
        case 'all':
            displayBlock(completedProjects);
            displayBlock(unCompletedProjects);
            break;

        case 'done':
            displayBlock(completedProjects);
            displayNone(unCompletedProjects);
            break;

        case 'working':
            displayNone(completedProjects);
            displayBlock(unCompletedProjects);
            break;

        default:
            break;
    }
})

select2.addEventListener('change', () => {
    let value = select2.value;

    switch (value) {
        case 'all':
            displayBlock(completedProjects);
            displayBlock(unCompletedProjects);
            break;

        case 'done':
            displayBlock(completedProjects);
            displayNone(unCompletedProjects);
            break;

        case 'working':
            displayNone(completedProjects);
            displayBlock(unCompletedProjects);
            break;

        default:
            break;
    }
})

function displayBlock(className) {
    for (let item of className) {
        item.style.display = 'block';
    }
}
function displayNone(className) {
    for (let item of className) {
        item.style.display = 'none';
    }
}