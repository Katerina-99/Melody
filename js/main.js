$(document).ready(function () {
  var currentFloor = 2; // переменная где хранится текущий этаж
  var floorPath = $('.home-image path') // каждый отдельный этаж в SVG
  var counterUp = $('.counter-up') // кнопка увеличения этажа 
  var counterDown = $('.counter-down') // кнопка уменьшения этажа 
  var modal = $('.modal'); //
  var modalCloseButton = $('.modal-close-button'); //
  var flatPath = $('.modal-image path') // каждая отдельная квартира
  var flatLink = $('.flat-link')// каждая отдельная квартира в списке справа
  var currentFlat = 
  
  // функция при наведении мышью на этаж
  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor'); // удаляем активный класс у этажей 
    currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
    $('.counter').text(currentFloor); // записываем значение этажа в счетчик справа от картинки
  });

  floorPath.on('click', toggleModal); //при клике на этаж, вызвать окно 
  modalCloseButton.on('click', toggleModal); //при клике на кнопку "закрыть", убрать окно 

  // отслеживаем клик по кнопке вверх
  counterUp.on('click', function () {
    // проверяем значение этажа, оно не должно быть больше 18-ти
    if (currentFloor < 18) { 
      currentFloor++; // прибавляем один этаж
      uscurrentFlor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную с этажом, чтобы было 01 а не 1
      $('.counter').text(uscurrentFlor); // записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor'); // удаляем активный класс у этажей 
      $(`[data-floor=${uscurrentFlor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
    }
  });

  // отслеживаем клик по кнопке вниз
  counterDown.on('click', function () {
    // проверяем значение этажа, оно не должно быть меньше 2-х
    if (currentFloor > 2) { 
      currentFloor--; // вычитаем один этаж
      uscurrentFlor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную с этажом, чтобы было 01 а не 1
      $('.counter').text(uscurrentFlor); // записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor'); // удаляем активный класс у этажей 
      $(`[data-floor=${uscurrentFlor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
    }
  });

  //функция открыть-закрыть окно
  function toggleModal() {
    modal.toggleClass('is-open');
  }
/* 
  // функция при наведении мышью на квартиру
  flatPath.on('mouseover', function () {
    flatLink.removeClass('hover'); // удаляем активный класс у этажей 
    currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
    $('.counter').text(currentFloor); // записываем значение этажа в счетчик справа от картинки
  }); */
});