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

const bodyChange = document.querySelector('body');
bodyChange.addEventListener('focus', function(event){
    event.target.style.backgroundColor = 'pink';
}, true);

//RESIZE

window.addEventListener('resize', (event) => {
    let windowWidth = window.outerWidth;
    let windowHeight = window.outerHeight;
    console.log( "Window size: width=" + windowWidth + ", height=" + windowHeight)
})


//SCROLL

window.addEventListener('scroll', (event)=> {
    console.log("scrolling")
    event.stopPropagation();
})
//SELECT
function textSelection(event) {
    const paras = document.querySelector('p');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    paras.textContent = `You selected: ${selection}`;
  }

const body = document.querySelector('body p');
body.addEventListener('select', textSelection);
 
//DBLCLICK
let signMeUp = document.querySelectorAll('.btn');
for(let i = 0; i < signMeUp.length; i++)
signMeUp[i].addEventListener('dblclick', (event)=> {
    alert('Working!')
})
//DRAG/DROP