console.log("welcome to MusicFire");
// initize the variables
let songIndex = 0;
let audioElement = new Audio('songs/3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songsName: "bihar wale", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songsName: "libaas", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songsName: "bandeya re", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songsName: "pishori", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songsName: "banke hawa", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songsName: "o bedardiya", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songsName: "honge kamyab", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songsName: "dhoka rakh du", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songsName: "kahani suno", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songsName: "kab ke bichde", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    { songsName: "rula ke gya", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    { songsName: "kya loge tum", filePath: "songs/12.mp3", coverPath: "covers/12.jpg" },
    { songsName: "khairiyat", filePath: "songs/13.mp3", coverPath: "covers/13.jpg" },
    { songsName: "fikar not", filePath: "songs/14.mp3", coverPath: "covers/14.jpg" },
    { songsName: "control", filePath: "songs/15.mp3", coverPath: "covers/15.jpg" },
    { songsName: "woh din", filePath: "songs/16.mp3", coverPath: "covers/16.jpg" },
    { songsName: "ae watan(m)", filePath: "songs/17.mp3", coverPath: "covers/17.jpg" },
    { songsName: "ae watan(f)", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    { songsName: "o mere yara", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
    { songsName: "jalima", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
    { songsName: "10 otta", filePath: "songs/21.mp3", coverPath: "covers/21.jpg" },
    { songsName: "10 bande", filePath: "songs/22.mp3", coverPath: "covers/22.jpg" },
    { songsName: "jeena sirf mere.", filePath: "songs/23.mp3", coverPath: "covers/23.jpg" },
    { songsName: "hum yaar h tm..", filePath: "songs/24.mp3", coverPath: "covers/24.jpg" },
    { songsName: "gori hai kalaiyan", filePath: "songs/25.mp3", coverPath: "covers/25.jpg" },
    { songsName: "tu meri zindagi h", filePath: "songs/26.mp3", coverPath: "covers/26.jpg"},
    { songsName: "ab tere bin", filePath: "songs/27.mp3", coverPath: "covers/27.jpg"},
    { songsName: "kaha jaye koi", filePath: "songs/28.mp3", coverPath: "covers/28.jpg"}

]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songsName;
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songsName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex>=27) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songsName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex<=0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songsName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
 // searching
 var a;
 function login(){
    if(a==1){
        document.getElementById("input").style.display="inline";
        return a=0;
    }
    else{
        document.getElementById("input").style.display="none";
        return a=1;
    }
 }

