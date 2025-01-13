document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.reviews__slider');
    const reviews = document.querySelectorAll('.reviews__review');
    const prevButton = document.querySelector('.reviews__prev');
    const nextButton = document.querySelector('.reviews__next');
    const burger = document.querySelector(".burger");

    //Обробник подiй для бургер-мени
    burger.addEventListener('click', (event) =>{
       event.currentTarget.classList.toggle("burger--active");
       document.querySelector(".header__menu").classList.toggle("header__menu--active");
    });

    // Створюю слайдер
    let currentIndex = 0;
    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    //Обробник подiй для кнопки назад для слайдера
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = reviews.length - 1;
        }
        updateSliderPosition();
    });

    //Обробник подiй для кнопки вперед для слайдера
    nextButton.addEventListener('click', () => {
        if (currentIndex < reviews.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition();
    });
});
