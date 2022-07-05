const audioDuration = document.querySelector('.audio-duration');
const durationRange = document.querySelector('.duration-range');
const audioCurrentTime = document.querySelector('.audio-currentTime');
const title = document.querySelector('.title');
const picture = document.querySelector('.picture')
const undo = document.querySelector('.undo');
const redo = document.querySelector('.redo')
const prev = document.querySelector('.prev');
const play = document.querySelector('.play');
const next = document.querySelector('.next');
const volumeRange = document.querySelector('.volume-range');

const someList = [
    {
        songName: 'Santiz-Tgg',
        songAudio: 'songs/tgg.mp3',
        songPicture: 'artist/santiz.jpg'
    },
    {
        songName: 'Eminem-Mockingbird',
        songAudio: 'songs/mockingbird.mp3',
        songPicture: 'artist/eminem.jpg'
    },
    {
        songName: 'Скриптонит-Бэлмейн',
        songAudio: 'songs/belmeyn.mp3',
        songPicture: 'artist/script.png'
    },
    {
        songName: 'Мияги-Я подарю тебя ганджа',
        songAudio: 'songs/ganja.mp3',
        songPicture: 'artist/miyagi.jpg'
    },
    {
        songName: 'Гуф-Письмо домой',
        songAudio: 'songs/pismo-domoy.mp3',
        songPicture: 'artist/guf.jpg'
    }
]

let songStart = false;

function audioPlay ( ) {
    songStart = true;
    audio.play();
}


function audioPaouse () {
    songStart = false;
    audio.pause();
}

function loadSong (songList) {
    title.textContent = songList.songName;
    audio.src = songList.songAudio;
    picture.src = songList.songPicture;
}

let i = 0;

loadSong(someList[i]);

play.addEventListener('click' , () =>{
    if(songStart == false) {
        audioPlay();
        play.className = 'fa fa-pause';
    }
    else{
        audioPaouse();
        play.className = 'fa fa-play'
    }
})

next.addEventListener('click' , () =>{
    if(i < 4) {
        i++;
        loadSong(someList[i]);
        audioPaouse();
        play.className = 'fa fa-play';
    }
    else{
        i = 0;
        loadSong(someList[i]);
        audioPaouse();
        play.className = 'fa fa-play';
    }
})

prev.addEventListener('click' , () =>{
    if(i > 0) {
        i--;
        loadSong(someList[i]);
        audioPaouse();
        play.className = 'fa fa-play';
    }
    else{
        i = 4;
        loadSong(someList[i]);
        audioPaouse()
        play.className = 'fa fa-play';
    }
})