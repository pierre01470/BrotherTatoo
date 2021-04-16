const showBtn = document.getElementById('burgerBtn');
const show = document.getElementById('menu_nav')

showBtn.addEventListener('click', function () {
    show.classList.toggle("show_menu");
});