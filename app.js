let wait = document.querySelector('.wait');
let msg = document.querySelector('.alert');

console.log(wait);



wait.addEventListener('click',(await fun()));


msg.addEventListener('click',() => {
    alert('Hello this is an alert message');
});


async function fun() {
    // let i = 1;
    // for(; i <= 10000 * 100000; i++)
    //     for(let j = 1; j <= 10000 * 100000; j++)
    //         continue;

    console.log('hey');
}