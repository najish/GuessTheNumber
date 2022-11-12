let x = document.querySelector('.first>div');

let contents = document.querySelectorAll('.first>div');


contents.forEach(x => x.addEventListener('click', () =>
{
    for(let content of contents) {
        content.removeAttribute('id');
    }

    x.setAttribute('id','color');
}));
x.setAttribute('id','color');