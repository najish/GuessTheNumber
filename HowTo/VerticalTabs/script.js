let boxes = document.querySelectorAll('.first>div');
let contents = document.querySelectorAll('.second>div');

function func() {
    for(let box of boxes) {
        box.removeAttribute('id');
    }
}

boxes.forEach(x => 
{
    x.addEventListener('click', () => 
    {
        console.log(x.textContent.trim());
        for(let y of contents) {
            let str = y.textContent.trim();
            if(str.includes(x.textContent.toLocaleLowerCase().trim())) {
                y.setAttribute('style','display:block');
            }
            else {
                y.setAttribute('style','display:none');
            }
        }
        func();
        x.setAttribute('id','color');
    });
});