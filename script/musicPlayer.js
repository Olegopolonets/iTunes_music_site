export const musicPlayerInit = () => {
    const audio = document.querySelector('.audio');
    const audioImg = document.querySelector('.audio-img');
    const audioHeader = document.querySelector('.audio-header');
    const audioPlayer = document.querySelector('.audio-player');
    const audioNavigation = document.querySelector('.audio-navigation');
    const audioButtonPlay = document.querySelector('.audio-button__play');
    const audioProgress = document.querySelector('.audio-progress');
    const audioProgressTiming = document.querySelector('.audio-progress__timing');
    const audioTimePassed = document.querySelector('.audio-time__passed');
    const audioTimeTotal = document.querySelector('.audio-time__total');

    const playList = ['hello', 'flow', 'speed']; // масив з музикою

    let trackIndex = 0;


    audioNavigation.addEventListener('click', event => {
        const target = event.target;

        if (target.classList.contains('audio-button__play')) {
            audio.classList.toggle('play'); // аніміція картинки    
            audioButtonPlay.classList.toggle('fa-play'); // заміна іконки
            audioButtonPlay.classList.toggle('fa-pause'); //заміна іконки

            if (audioPlayer.paused) { // включение музики
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }

        }
    });


};