console.log('hello javascript');

let box = document.querySelectorAll('.box>div');
let container = document.querySelector('.container');


box.forEach(x => 
{
    x.addEventListener('click', () =>
    {
        console.log(x.textContent.trim());
        container.classList.toggle('active');
    });
});