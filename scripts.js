const basic = document.querySelector('.container');
const imgs = document.querySelectorAll('.img-item');
const logo = document.querySelector('header .logo');
const music = document.querySelector('header .play-btn');
const socials = document.querySelectorAll('.social ul li');

const panel = document.querySelector('.transition-panel');
const playlistContainer = document.querySelector(".playlist-container");


const videos = document.querySelectorAll('ul.playlist li');
const videoContainer = document.querySelector('.video-container');

const videoClose = document.querySelector(".video-container .close");

const returnBtn = document.querySelector(".playlist-container .return");


const filters = ["grey", "sepia"];
const size = imgs.length;

videos.forEach((video) => {
    video.addEventListener("click", function() {
        resetVideo();
        videoContainer.classList.add('active');
        video.classList.add('active');
        setVideo(video.dataset.src);
        window.scrollTo(280, 0);
    })
});


videoClose.addEventListener("click", function(){
    resetVideo();    
});

returnBtn.addEventListener("click", function(){
    transitionPanel();    
})

 function active(){
     let index;
     let flag = false;
     for(index = 0; index < imgs.length; index++){
         if(imgs[index].classList.contains('show')){
             flag = true;
             break;
         }
     };
     if (flag){
        return index;
     }else{
        return -1;
     }
 }

 function showimage(){
    const number = Math.floor(Math.random() * size); 
    addEffect(imgs[number]);
    imgs[number].classList.add('show');
 }

 function hideImage(){
    let activeImg = active();
    if(activeImg > -1){
        imgs[activeImg].classList.remove('show');
        removeEffect(imgs[activeImg]);
    }
 }

 function addEffect(el){
    const number = Math.floor(Math.random() * (filters.length+1));
    console.log(number);
    if(number !== filters.length){
        el.classList.add('filter');     
        el.classList.add(filters[number]);  
    }   
 }

 function removeEffect(el){
    //const number = Math.floor(Math.random() * effSize);
    if(el.classList.contains("filter")){
        el.classList.remove('filter')
        if(el.classList.contains("grey")) el.classList.remove("grey");
        else  el.classList.remove("sepia");     
    }   
 }



 setInterval(function(){ 
    hideImage();
    showimage();
 }, 1800);

 setTimeout(function(){ 
    showimage();
 }, 800);

 setTimeout(function(){ 
    logo.classList.add("show");  
    setTimeout(function(){
        showSocials(0);
    }, 1500);
 }, 5000);


 function showSocials(index){
    if(index < socials.length){
        socials[index].classList.add("show"); 
        setTimeout(function(){ 
            showSocials(index + 1)
        }, 500)     
    }else{
        music.classList.add("show");
    }
 }

 music.addEventListener("click", function(){
    transitionPanel();    
 });


 function transitionPanel(){
    panel.classList.add("show");
     setTimeout(function(){
        basic.classList.toggle('hide'); 
        playlistContainer.classList.toggle('active'); 
        panel.classList.remove("show");
     }, 1200);
 }


function setVideo(source){
    player.loadVideoById(source);
    player.playVideo();
}

function resetVideo(){
    if(videoContainer.classList.contains('active')){
        stopVideo();
        const activeVideo = document.querySelector("ul.playlist li.active");
        activeVideo.classList.remove('active');
        videoContainer.classList.remove('active');
    }
}

