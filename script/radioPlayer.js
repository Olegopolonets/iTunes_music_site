export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio');
    const radioStop = document.querySelector('.radio-stop');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioHeaderBig = document.querySelector('.radio-header__big');


    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;

    // зміна іконки паузи на кнопці + анимация иконки радио
    const changeIconPlay = () => {
        if (audio.paused) {
            radio.classList.remove('play');
            radioStop.classList.add('fa-play');
            radioStop.classList.remove('fa-stop');
        } else {
            radio.classList.add('play');
            radioStop.classList.remove('fa-play');
            radioStop.classList.add('fa-stop');
        }
    };

    // добавляє сіру обводку до вибраної радіо-станції 
    const selectItem = elem => {
        radioItem.forEach(item => item.classList.remove('select'));
        elem.classList.add('select');
    }

    // реалізація роботи радіо
    radioNavigation.addEventListener('change', event => {
        const target = event.target;
        const parrent = target.closest('.radio-item');
        selectItem(parrent);

        const title = parrent.querySelector('.radio-name').textContent;
        radioHeaderBig.textContent = title; // підставляється імя радіостанції в головний заголовок "радіо"

        const urlImg = parrent.querySelector('.radio-img').src;
        radioCoverImg.src = urlImg; // підставляється картинка вибраної радіостанції в головну картинку сайту

        radioStop.disabled = false;

        audio.src = target.dataset.radioStantion;

        audio.play();
        changeIconPlay();
    });

    // кнопка стоп для радио

    radioStop.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }

        changeIconPlay();
    });

};