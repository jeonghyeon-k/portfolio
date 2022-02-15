'use strict';

// 사용자 화면에 맞게 배경 높이 설정
const screenheight = screen.height;
const home = document.querySelector('#home');
home.style.height = screenheight;

// 홈 화면에 초록볼 애니메이션
const greenball = document.querySelector('.home__logo__greenball');
greenball.classList.add('active');
document.addEventListener('scroll',()=>{
    if(window.scrollY<10 ){
        greenball.classList.add('active');
    }else{
        greenball.classList.remove('active');
    }
})

// 네비바
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(e)=>{
    const target = e.target;
    const link = target.dataset.link;
    scrollIntoView(link)
})

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}