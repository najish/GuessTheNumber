let firstBoxes = document.querySelectorAll('.first>div');
let secondBoxes = document.querySelectorAll('.second>div');


function func(element) {
    firstBoxes.forEach(x => x.removeAttribute('id'));
};


firstBoxes.forEach(x => 
{
    x.addEventListener('click',() => 
    {
        func(x);
        x.setAttribute('id','color');
    });
});


// firstBoxes.forEach(x => x.addEventListener('click', () =>
// {
//     let str1 = x.textContent.trim().toLowerCase();
//     console.log(`${str1}`);

//     for(let p of firstBoxes) {
//         if(p.className.includes('active'))
//             p.className = p.className.replace('active','');
//     }
//     x.className = 'active';
//     secondBoxes.forEach(y => 
//     {
//         // let str2 = y.className.trim();
//         // if(str2.includes('top')) {
//         //     str2 = str2.replace('top','');
//         //     y.className = str2;
//         //     console.log(str2);
//         // }else if(str1 === str2) {
//         //     y.className += ' top';
//         // }
//         let str2 = y.className.trim().toLowerCase();
//         if(str2.includes(str1) && str2.includes('top'));
//         else if(str2.includes(str1) == false && str2.includes('top')) {
//             y.className = y.className.replace('top','').trim();
//         }
//         else if(str2.includes(str1) && str2.includes('top') == false)
//             y.className += ' top';
//     });
    
// }));



