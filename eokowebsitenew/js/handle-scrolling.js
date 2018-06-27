const START_ANIMATION = 2400
const END_ANIMATION = 6000
const screenRecording = document.getElementById("video-screen-recording")
const target = $("#target")
document.addEventListener("scroll", function(event) {

    console.log("scrolltop", $(window).scrollTop())
    const scrollTop = $(window).scrollTop()
    const offset = target.offset().top
    const height = target.height()
    if (scrollTop > offset + height) {
        screenRecording.play();
        const videoStyle = {
            width: "25vw",
            position: "fixed",
            top: "1vh",
            bottom: "5vh",
            right: "auto",
            left: "auto",
            display: "block"
        }
        for (var i in videoStyle) {
            screenRecording.style[i] = videoStyle[i]
        }   
    }
    else {
        screenRecording.style.display = "none"
    }
    
   

    if (window.pageYOffset >= START_ANIMATION) {
       
        

       
    }

    
}) 