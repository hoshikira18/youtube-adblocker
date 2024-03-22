setInterval(() => {
    let txt = document.querySelectorAll('.text')
    if(txt.length > 0) {
        console.log(document.querySelectorAll('.fa-icon-outline-video'))
        document.querySelector('.fa-icon-outline-video').click()
        clearInterval()
    }
    else {
        console.log('not found')
    }
}, 1000)