let x = document.querySelector('.container');

let home = document.querySelector('div.home');
let list = document.querySelectorAll('header>nav>ul>li');

const fun = function() {
    let t = document.querySelector('div.home');
    t.setAttribute('style','display:block');    
}


list.forEach(x => x.addEventListener('mouseover',() => {
    if(x.textContent == 'Home') {
        fun();
        console.log('hello home');
    }
    console.log(`mouse is overed on ${x.textContent}`);
}));
