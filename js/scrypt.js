
//КНОПКА "ВВЕРХ"
$(document).ready(function() {
    // Показать кнопку при прокрутке вниз на 20px от верхней части документа
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('#scrollToTopBtn').fadeIn();
        } else {
            $('#scrollToTopBtn').fadeOut();
        }
    });

    // При клике на кнопку прокрутить страницу вверх
    $('#scrollToTopBtn').click(function() {
        $('html, body').animate({scrollTop: 0},200); // Плавная прокрутка
        return false;
    });
});

//ИНТЕРАКТИВ ДЛЯ ВЫПАДАЮЩЕГО СПИСКА
$(document).ready(function(){
    $('.dropdown-item').click(function(event){
        event.preventDefault();
        var message = $(this).data('message');
        alert('Вы выбрали: ' + message);
    });
});

//ОКНО КОНСУЛЬТАЦИИ
document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn1');
    const modal = document.getElementById('modal1');
    const closeBtn = document.querySelector('.close');

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// КРАСНЫЙ ЛАЙК
function like(id) {
    let src = document.getElementById(id).src;
    console.log(src);
    if (src === "file:///D:/College/3%20%D0%BA%D1%83%D1%80%D1%81/1%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B8/%D0%B2%D0%B5%D0%B1_%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0/source/img/null_heart.svg") {
        document.getElementById(id).src = "source/img/full_heart.svg"
    } else {
        document.getElementById(id).src = "source/img/null_heart.svg"
    }
}

// ПОДСКАЗКА К КНОПКЕ
$(function(){
    $("#openModalBtn1").tooltip();
    $("#openButton").tooltip();
});

//РЕКЛАМА
function showAdvertisement() {
    const ads = [
        "Реклама 1: Купите наши лучшие товары по скидке!",
        "Реклама 2: Скидка 25% на все золотые изделия!",
        "Реклама 3: Подпишитесь на нашу рассылку и получите скидку 10%!"
    ];
    const randomAd = ads[Math.floor(Math.random() * ads.length)];
    alert(randomAd);
}

setTimeout(() => showAdvertisement(), 10000);

setInterval(() => showAdvertisement(), 100000);


// СЛАЙДЕР
/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item_slider", то есть к картинкам: */
    let slides = document.getElementsByClassName("item_slider");
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
  
    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}

// Добавляем анимацию перехода
function showSlides(n) {
    let slides = document.getElementsByClassName("item_slider");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let slide of slides) {
        slide.style.display = "none";
        slide.style.opacity = 0; // Для анимации плавного исчезновения
        slide.style.transition = "opacity 0.5s"; // Плавный переход
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(() => {
        slides[slideIndex - 1].style.opacity = 1; // Для анимации плавного появления
    }, 10); // Небольшая задержка для запуска анимации
}