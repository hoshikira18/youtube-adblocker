
setInterval(function() {
    let video = document.querySelectorAll('.ad-showing')[0].querySelector('video');
if(video) {
   video.currentTime = video.duration; // skip ad
    let btn = document.querySelector('.ytp-ad-skip-button-modern');
    btn.click();
}
}, 1000)
