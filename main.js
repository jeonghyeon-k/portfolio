'use strict';

// 사용자 화면에 맞게 배경 높이 설정
const screenheight = screen.height;
const home = document.querySelector('#home');
home.style.height = screenheight;

// 홈 화면에 초록볼 애니메이션
const greenball = document.querySelector('.home__logo__greenball');
greenball.classList.add('active');
document.addEventListener('scroll', () => {
    navbarMenu.classList.remove('open');
    if (window.scrollY < 10) {
        greenball.classList.add('active');
    } else {
        greenball.classList.remove('active');
    }
});

// 네비바
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', e => {
    const target = e.target;
    const link = target.dataset.link;
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});

// 네비바를 투명하게 만드는 것
const navbarHeight = navbarMenu.getBoundingClientRect().height;
const navbar = document.querySelector('#navbar');
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Projects ㄷ드로우
let isMouseDown = false;
let startX, scrollLeft;
const slider = document.querySelector('.projects__listbox');
slider.addEventListener('mousedown', e => {
    isMouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

slider.addEventListener('mouseup', () => {
    isMouseDown = false;
});

slider.addEventListener('mousemove', e => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;
});

const proejectbtnleft = document.querySelector('.project__btn-left');
const proejectbtnright = document.querySelector('.project__btn-right');

proejectbtnleft.addEventListener('click', () => {
    slider.scrollLeft = 0;
});
proejectbtnright.addEventListener('click', () => {
    slider.scrollLeft = slider.scrollWidth;
});
slider.addEventListener('scroll',()=>{

    if(slider.scrollLeft == 0){
        proejectbtnleft.classList.remove('active')
    }else{
        proejectbtnleft.classList.add('active')
        proejectbtnright.classList.add('active')
    }
})