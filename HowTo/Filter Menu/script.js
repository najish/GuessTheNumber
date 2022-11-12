console.log('hello najish');
let contents = document.querySelectorAll('.first>*');
let x = document.getElementById('search');
console.log(contents);
console.log(x);


for(let i in contents) {
    if(i != 1) {
        contents[i].setAttribute('style','padding-left:10px');
    }
}


x.addEventListener('input',() =>
{
    let str = x.value;
    str = str.toLocaleLowerCase();
    console.log(str);
    let list = [];

    let map = new Map();
    for(let i in contents) {
        if(i > 1) {
            list.push(contents[i].textContent.toLocaleLowerCase().trim());
        }
    }
    let newList = list.filter(options => options.includes(str));
    console.log(newList);
    for(let i in contents) {
        let str2 = contents[i].textContent.toLocaleLowerCase().trim();
        let test = newList.includes(str2);

        if(i > 1 && test == false) {
            contents[i].setAttribute('style','display:none')
        } else {
            contents[i].setAttribute('style','display:block');
        }
    }

});


