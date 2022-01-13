const burger = document.querySelector('.header__burger')
const navigation = document.querySelector('.header__nav')
const html = document.querySelector('html')

burger.addEventListener('click', () => {
  navigation.classList.toggle('opened')
  html.classList.toggle('menu-opened')
})