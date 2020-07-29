export const videoPlayerInit = () => {

    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoProgress = document.querySelector('.video-progress');
    const videoTimeTotal = document.querySelector('.video-time__total');

    // замена иконки Вооспрозвести/Пауза
    const toggleIcon = () => {
        if (videoPlayer.paused) {
            videoButtonPlay.classList.remove('fa-pause');
            videoButtonPlay.classList.add('fa-play');
        } else {
            videoButtonPlay.classList.add('fa-pause');
            videoButtonPlay.classList.remove('fa-play');
        }
    }

    // ф-ция включение видео-плеера 
    const togglePlay = () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    };

    // ф-ция останавливает видео и начинает его сначала 
    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }

    // ф-ция добавляет 0 к времени видео
    const addZero = n => n < 10 ? '0' + n : n;

    videoPlayer.addEventListener('click', togglePlay);
    videoButtonPlay.addEventListener('click', togglePlay);
    // замена иконок собитыя 'play' и 'pause' есть у аудио и видео
    videoPlayer.addEventListener('play', toggleIcon);
    videoPlayer.addEventListener('pause', toggleIcon);

    videoButtonStop.addEventListener('click', stopPlay);

    // показ сколько времени идет видео
    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;

        videoProgress.value = (currentTime / duration) * 100; // videoProgress идет вместе с видео

        let minutePassed = Math.floor(currentTime / 60);
        let secondsPassed = Math.floor(currentTime % 60);

        let minuteTotal = Math.floor(duration / 60);
        let secondsTotal = Math.floor(duration % 60);

        videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;
        videoTimeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secondsTotal);
    });

    // переключение videoProgress
    videoProgress.addEventListener('change', () => {
        const duration = videoPlayer.duration;
        const value = videoProgress.value;

        videoPlayer.currentTime = (value * duration) / 100;
    });

};