import './less/index.less'

// Your code goes here!

//MOUSEOVER

const titleBig = document.querySelector('h1.logo-heading');
titleBig.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '10em';
})
titleBig.addEventListener('mouseout', evt1, false);

function evt1(){
    titleBig.setAttribute('style', 'font-size: 40px;')
}

//KEYDOWN

const keyDown = document.querySelector('body');
keyDown.addEventListener('keydown', function(evt){
    if(evt.key === 'ArrowDown'){
        evt.target.style.backgroundColor = 'blue';
    }
})

//WHEEL

function zoom(event){
    event.preventDefault();

    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('img');
el.onwheel = zoom;

//LOAD

window.addEventListener('load', (event) => {
    alert('The Page Is Working!');
})

//FOCUS

const buttonChange = document.querySelector('.btn');
buttonChange.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = 'pink';
})