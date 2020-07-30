export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio');
    const radioStop = document.querySelector('.radio-stop');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioHeader = document.querySelector('.radio-header');


    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;

    // реалызація роботи радіо
    radioNavigation.addEventListener('change', event => {
        const target = event.target;

        audio.src = target.dataset.radioStantion;

        audio.play();
    });

};