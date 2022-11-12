let sections = document.querySelectorAll('.section');
let panels = document.querySelectorAll('div.panel');



console.log(sections);
console.log(panels);



sections.forEach(x => 
{
    x.addEventListener('click', () => 
    {
        let str = x.querySelector('div')
        console.log(`${str.textContent.trim()} is clicked`); 

        let p = x.querySelector('.panel');
        if(p == null)
            p = x.querySelector('.panel2');

        
        if(p.className == 'panel')
            p.className = 'panel2';
        else if(p.className == 'panel2')
            p.className = 'panel';        
        

    });
});