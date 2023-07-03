//поле поиска

let open = document.querySelector('.search__btn');
let form = document.querySelector('.search__form');
let close = document.querySelector('.search__close');

open.addEventListener('click',
  function() {
    form.classList.toggle('search__form--active');
  });

  close.addEventListener('click',
    function() {
      form.classList.remove('search__form--active');
  });

// бургер меню на JS
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let closeBtnBurger = document.querySelector('.header__close');

burger.addEventListener('click', function() {  
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
});

closeBtnBurger.addEventListener('click', function() {  
  menu.classList.remove('header__nav--active');  
  document.body.classList.remove('stop-scroll');
});

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {    
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});

// яндекс карта
function init(){
    let map = new ymaps.Map("map", {
        center: [55.76941209943176,37.636521151926736],
        zoom: 17
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)


    // Создание геообъекта с типом точка (метка).
    let myPlacemark = new ymaps.Placemark([55.76991291719402,37.63886704882291], {
      // balloonContentHeader: 'Студия «High pass»',
      // balloonContentBody: 'Москва, Даев переулок, дом 41, бизнес-центр «Даев Плаза», этаж 8, офис № 82',
      // balloonContentFooter: '+7-495-424-23-53',
    }, {
      iconLayout: 'default#image', // хотим использовать свою картинку      
      iconImageHref: '../images/map.svg', // путь до изображения      
      iconImageSize: [12, 12], // Размеры метки-картинки      
      iconImageOffset: [0, 0] // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
  });

  map.geoObjects.add(myPlacemark);
};

ymaps.ready(init);
      
// GreenSock

// закрыть, открыть адрес на карте
let menuTimeline = gsap.timeline({paused: true});
let openBtn = document.querySelector(".map");
let closeBtn = document.querySelector(".address__close");

menuTimeline
  .fromTo(".address__tel", {opacity: 1}, {opacity: 0, duration: 0.5}) 
  .fromTo(".address__text", {opacity: 1}, {opacity: 0, duration: 0.5}, "-=0.5") 
  .fromTo(".address__title", {opacity: 1}, {opacity: 0, duration: 0.5}, "-=0.5")

  
  .fromTo(".contacts__address", {opacity: 1}, {opacity: 0, duration: 0.5})
  .fromTo(".contacts__address", {display: "block"}, {display: "none"})
  
closeBtn.addEventListener("click", () => menuTimeline.play()) 
openBtn.addEventListener("click", () => menuTimeline.reverse())


// валидация формы 
// форма email  в секции about

let validationAbout = new JustValidate('#about-form',{
  errorLabelStyle: {
    color: '#F06666'
  },

  errorFieldStyle: {
    border: '1px solid #F06666',
  }
  
})

validationAbout.addField('#about-input', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ]);

// форма в секции контакты

let validationForm = new JustValidate('#contacts-form',{
    errorLabelStyle: {
      color: '#FF3030'
    },
  
    errorFieldStyle: {
      border: '1px solid ##FF3030',
    }
})
    
validationForm.addField('#name', [
    {
      rule: 'required', //поле обязательно для введения
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимум 2 символа',
    },  
    {
      rule: 'customRegexp',
      value: /(?=.*[а-я])(?=.*[А-Я])/,
      errorMessage: 'Недопустимый формат',
    },
  ])

  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Ошибка в названии почты',
    },

]);