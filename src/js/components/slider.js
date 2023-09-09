const slides = document.querySelectorAll('.about-content-list__item');
const sliderWrapper = document.querySelector('.about-content-list');
const buttonPrev = document.querySelector('[data-controller="prev"]');
const buttonNext = document.querySelector('[data-controller="next"]');
const paginationButtons = document.querySelectorAll('.about-pagination-bullet');

const slideWidth = slides[0].offsetWidth;
let slideTransform = 0;
let countSlides = slides.length;
let countSlider = 0;

const styles = getComputedStyle(document.documentElement);
const slidesInDisplay = styles.getPropertyValue('--number-of-slides');
const slideMove = countSlides - slidesInDisplay;

buttonPrev.setAttribute("disabled", "");

if (countSlides <= slidesInDisplay) {
    buttonPrev.setAttribute("disabled", "");
    buttonNext.setAttribute("disabled", "");
}

function buttonDisable() {
    if (countSlider === 0) {
        buttonPrev.setAttribute("disabled", "");
    }

    
    if (countSlider === slideMove) {
        buttonNext.setAttribute("disabled", "");
    }
}

buttonPrev.addEventListener('click', () => {
    slideTransform -= slideWidth;
    sliderWrapper.style.transform = `translateX(${-slideTransform}px)`;
    buttonNext.removeAttribute("disabled");

    countSlider--;
    buttonDisable()
});

buttonNext.addEventListener('click', () => {
    slideTransform += slideWidth;
    sliderWrapper.style.transform = `translateX(${-slideTransform}px)`;
    buttonPrev.removeAttribute("disabled");
    countSlider++;

    buttonDisable()
});

for (let index = 0; index < paginationButtons.length; index++) {
    const element = paginationButtons[index];
    element.addEventListener('click', ()=> {
      let index =  element.dataset.index;
      countSlider = Number(index);
      sliderWrapper.style.transform = `translateX(${-slideWidth * index}px)`;

      slideTransform = slideWidth * index

      buttonPrev.removeAttribute("disabled");
      buttonNext.removeAttribute("disabled");

      paginationButtons.forEach((e)=> {
        e.classList.remove('about-pagination-bullet--is-active')
      });

      element.classList.add('about-pagination-bullet--is-active')
      buttonDisable()
    })
}
