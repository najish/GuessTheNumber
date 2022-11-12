let cities = document.querySelectorAll('.cities>div');
let contents = document.querySelectorAll('.content>div');


function fun(element) {
    let ele = element.textContent.toLowerCase().trim();
    console.log(`${ele} is clicked`);
    for(let content of contents) {
        let str = content.className.toLowerCase().trim();
        console.log(str.includes(ele));
        if(str.includes(ele)) {
            cities.forEach( x => x.removeAttribute('id'));
            content.setAttribute('style','display:block');
            content.setAttribute('id',ele);
            element.setAttribute('id',ele);
        }
        else {
            content.setAttribute('style','display:none');
            content.removeAttribute('id');

            
        }
    }
}


cities.forEach(x => 
{
    x.addEventListener('click',() =>
    {
        let str = x.textContent.toLowerCase().trim();
        fun(x);
    });
});


document.querySelector('.cities>div').click();