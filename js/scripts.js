const toggletheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const toogleColors=document.getElementById('toogle-colors');
const rootStyles = document.documentElement.style;

toggletheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (toggleIcon.src.includes('sun.svg')) {
        toggleIcon.src = 'assets/icons/moon.svg';
        toggleText.textContent = 'Cambios de Modo';
    }else{
        toggleIcon.src = 'assets/icons/sun.svg';
        toggleText.textContent = 'Dark Mode';
    }
});


toogleColors.addEventListener('click', (e) => {
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
})