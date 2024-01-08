const image2 = document.querySelector('.img2');
const scroll = document.querySelector('.scroll');

window.addEventListener('mousemove',(e)=>{
    image2.style.left = e.clientX + 'px';
    scroll.style.left = -23 + e.clientX + 'px';
});

