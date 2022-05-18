const share = document.querySelector('.share');
const btn = document.querySelector('.button');

btn.addEventListener('click', () => {
    share.style.display = 'flex';
})

document.addEventListener('click', (e) => {
    if(!e.target.classList.contains('share') 
    && !e.target.classList.contains('button')
    && !e.target.classList.contains('fa-share')){
        share.style.display = 'none';
    }
})