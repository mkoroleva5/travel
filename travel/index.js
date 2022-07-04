console.log('1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\nВ коде странице присутствуют следующие элементы (указано минимальное количество, может быть больше):\n<header>, <main>, <footer> +3\nчетыре элемента <section> (по количеству секций) +3\nтолько один заголовок <h1> +3\nтри заголовка <h2> (количество секций минус одна, у которой заголовок <h1>) +3\nодин элемент <nav> (панель навигации) +3\nдва списка ul > li > a (панель навигации, ссылки на соцсети) +3\nчетыре кнопки <button> +2\n3. Вёрстка соответствует макету +48\nблок <header> +6\nсекция preview +9\nсекция steps +9\nсекция destinations +9\nсекция stories +9\nблок <footer> +6\n4. Требования к css + 12\nдля построения сетки используются флексы или гриды +2\nпри уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\nфоновый цвет тянется на всю ширину страницы +2\nиконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\nизображения добавлены в формате .jpg +2\nесть favicon +2\n5. Интерактивность, реализуемая через css +20\nплавная прокрутка по якорям +5\nиконки соцсетей в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса (допускается добавление своих вариантов иконок github или RSSchool) https://rs.school/js-stage0/ +5\nинтерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5\nобязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5')

// Menu 

const menuItem = document.querySelector('.menu');
const menuActive = document.querySelector('.nav');
const menuClose = document.querySelector('.close-button');
const menuLinks = document.querySelectorAll('.nav-link');
const dark = document.querySelector('.dark');

menuItem.addEventListener('click', () => {
    menuActive.classList.add('nav-active');
    dark.style.display = 'block';
})

menuClose.addEventListener('click', () => {
    menuActive.classList.remove('nav-active');
    dark.style.display = 'none';
})

if (window.innerWidth < 768) {
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', () => {
            menuActive.classList.remove('nav-active');
            dark.style.display = 'none';
        });
    }
}

document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(menuActive) || e.composedPath().includes(menuItem);
    if ( !click ) {
        menuActive.classList.remove('nav-active');
        dark.style.display = 'none';
    }
})

