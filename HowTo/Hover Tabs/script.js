let buttons = document.querySelectorAll('.first>div');
let contents = document.querySelectorAll('.second>div');

console.log(buttons);
console.log(contents);

buttons.forEach(x => 
{
    x.addEventListener('mouseover', ()=>
    {
        let str1 = x.textContent.toLocaleLowerCase().trim();
        for(let content of contents) {
            let str2 = content.className.toLowerCase().trim();

            if(str2.includes(str1)) {
                content.setAttribute('style','display:block');
            } else {
                content.setAttribute('style','display:none');
            }
        }
    });
});
