
'use strict';

// задание 1
document.querySelector('.task_1').classList.add('www');

// задание 2
document.querySelector('.task_2').classList.remove('www');

// задание 3
let flag = false;
for (let i of document.querySelector('.task_3').classList) {
    if (i == 'www') {
        flag = true;
        break
    }
}
console.log(`task_3 = ${flag}`);

// задание 4
let task_4 = document.querySelector('.task_4').classList;
let flag_4 = false;
for (let i of task_4) {
    if (i == 'www') {
        flag_4 = true;
        break
    }
};
if (flag_4) {
    task_4.remove('www');
} else {
    task_4.add('www');
}

// задание 5
let task_5 = document.querySelector('.task_5').classList;
console.log(`task_5 = ${task_5.length}`);

// задание 6
// let task_6 = document.querySelector('.task_6').classList;
// for (let i of task_6) {
//     alert(i);
// };

// задание 7
document.querySelector('#task_7').style.cssText = 'color: red; font-size: 30px; border: 1px;';

// задание 8
function task_8(elem) {
    console.log(`task_8 = ${elem.tagName}`);
}

// задание 9
function task_9(elem) {
    console.log(`task_9 = ${elem.tagName.toLowerCase()}`);
}
// задание 10
// let task_10 = document.querySelectorAll('.www')
// for (let i of task_10) {
//     i.classList.add(i.tagName.toLowerCase());
// }

// задание 11
// let elem = document.createElement('li');
// elem.innerHTML = 'пункт';
// document.querySelector('#task_11').appendChild(elem);

// задание 12
let task_12 = [document.createElement('li'), document.createElement('li'), document.createElement('li'), document.createElement('li')];
let task_12_2 = document.querySelector('#task_12');
let chet_task_12 = 1;
for (let i of task_12) {
    i.innerHTML = `Пункт: ${chet_task_12}`;
    task_12_2.appendChild(i);
    chet_task_12++;
}

// Задание 13
document.querySelector('#task_13').insertAdjacentHTML('beforeBegin', '<span>!!!</span>');
// задание 14
document.querySelector('#task_14').insertAdjacentHTML('afterEnd', '<span>!!!</span>');
// задние 15
document.querySelector('#task_15').insertAdjacentHTML('afterBegin', '<span>!!!</span>');
// Задание 16
document.querySelector('#task_16').insertAdjacentHTML('beforeEnd', '<span>!!!</span>');

// Задание 17
function task_17() {
    document.querySelector('#task_17').removeChild(document.querySelector('#task_17_children'));
}

// Залдание 18
function task_18() {
    document.querySelector('#task_18').removeChild(document.querySelector('#task_18').lastElementChild);
}
// Псоледнй потомок  - lastElementChild
function task_19(elem) {
    elem.remove();
}

function task_20(elem) {
    elem.remove();
}

function task_21() {
    document.getElementById('task_21_div').appendChild(document.querySelector(".task_21").cloneNode(true));
}

document.querySelector('#task_22').firstElementChild.style.color = 'red';


document.querySelector('#task_23').lastElementChild.style.color = 'red';

for (let i of document.querySelector('#task_24').children) {
    i.textContent += '!';
}

document.querySelector('#task_25').previousElementSibling.textContent += '!';

document.querySelector('#task_26').nextElementSibling.textContent += '!';

document.querySelector('#task_27').parentElement.style.color = 'red';

document.querySelector('#task_28').parentNode.style.color = 'red';

function task_29() {
    console.log(`task_29 = ${document.querySelector('#task_29').clientTop}`)
}
function task_30() {
    console.log(`task_30 = ${document.querySelector('#task_30').clientLeft}`);
}

function task_31() {
    console.log(`task_31 = ${document.querySelector('#task_31').offsetWidth}`);
}

function task_32() {
    console.log(`task_32 = ${document.querySelector('#task_32').offsetHeight}`);
}

function task_33() {
    console.log(`task_33 = ${document.querySelector('#task_33').clientWidth}`);
}

function task_34() {
    console.log(`task_34 = ${document.querySelector('#task_34').clientHeight}`);
}

function task_35() {
    console.log(`task_35 = ${document.querySelector('#task_35').scrollHeight}`);
}

function task_36() {
    console.log(`task_36 = ${document.querySelector('#task_36').scrollWidth}`);
}

function task_37() {
    document.querySelector('#task_37').scrollTo(0, 100);
}

function task_38() {
    console.log(`task_38 = ${window.pageYOffset}`);
}

function task_39() {
    console.log(`task_39 = ${window.pageXOffset}`);
}

function task_40() {
    document.querySelector('#task_40').scrollTo(300, 500);
}

function task_41() {
    window.scrollBy(0, 300);
}

function task_42() {
    let body = document.body,
    html = document.documentElement;

    let height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    window.scrollTo(0, height);
}

function task_43() {
    window.scrollBy(0, 400);
}

function task_44() {
    let html = document.documentElement;

    if (Math.round(html.scrollHeight - html.scrollTop) === html.clientHeight) {
    
        window.scrollBy(0, -100);
    }
}

function task_45(elem) {
    if (elem.style.width) {
        elem.style.width = +elem.style.width.slice(0, -2) * 2 + 'px';

    } else{
        elem.style.width = '1px';
    }
}


