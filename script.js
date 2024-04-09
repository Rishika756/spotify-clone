console.log("welcome to spotify");
let songindex=0;
let audioelement = new Audio('./songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
// let masterSongName=getElementById('masterSongName');
let songitems=Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songname: "Shape of you", filepath: "./songs/1.mp3" , coverpath: "./covers/1.jpg"},
    {songname: "Mi Amor", filepath: "./songs/2.mp3" , coverpath: "./covers/2.jpg"},
    {songname: "Perfect", filepath: "./songs/3.mp3" , coverpath: "./covers/3.jpeg"},
    {songname: "Criminal", filepath: "./songs/4.mp3" , coverpath: "./covers/4.jpeg"},
    {songname: "Pal", filepath: "./songs/5.mp3" , coverpath: "./covers/5.jpeg"},
    {songname: "Kya Mujhe Pyaar Hai", filepath: "./songs/6.mp3" , coverpath: "./covers/6.jpeg"},
]
songitems.forEach((e,i) => {
    // console.log(e,i)
    e.getElementsByTagName("img")[0].src=songs[i].coverpath;
    e.getElementsByClassName("songname")[0].innerText=songs[i].songname;
});
// audioelement.play;
masterplay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currenttime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
        gif.style.opacity=1
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause')
        masterplay.classList.add('fa-circle-play')
        gif.style.opacity=0
    }

})
audioelement.addEventListener('timeupdate', ()=>{
    
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
    
    myprogressbar.value=progress
})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100
})
const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}
Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        makeAllplays();
        
        // console.log(e.target);
        songindex=parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        
        audioelement.src=`./songs/${songindex+1}.mp3`;
        // masterSongName.innerText=songs[songindex].songname;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')

    }) 
});
document.getElementById('next').addEventListener('click',()=>{
    if (songindex>=5){
        songindex=0
    }
    else{
        songindex +=1;
    }
    audioelement.src=`./songs/${songindex+1}.mp3`;
    // masterSongName.innerText=songs[songindex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')

})
document.getElementById('previous').addEventListener('click',()=>{
    if (songindex<=0){
        songindex=0
    }
    else{
        songindex -=1;
    }
    audioelement.src=`./songs/${songindex+1}.mp3`;
    // masterSongName.innerText=songs[songindex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')

})