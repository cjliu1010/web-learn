let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// function setUserName(){
//     let myName = prompt('请输入你的名字。');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla 酷毙了，' + myName;
// }

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla酷毙了，' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla酷毙了，' + storeName;
}

myButton.onclick = function () {
    setUserName();
}