const START_ANIMATION = 2400
const END_ANIMATION = 6000
const vidJquery = $("#video-screen-recording")
const screenRecording = vidJquery[0]
const target = $("#begin-video-animation")
console.log('screenRecording', screenRecording)
document.addEventListener("scroll", function(event) {

    console.log("scrolltop", $(window).scrollTop())
    const scrollTop = $(window).scrollTop()
    const offset = target.offset().top
    // const height = target.height()
    if (scrollTop > offset) {
        screenRecording.play();
        const videoStyle = {
            width: "25vw",
            position: "fixed",
            top: "5vh",
            bottom: "5vh",
            right: "auto",
            left: "auto", 
            // display: "block",

        }
        vidJquery.css(videoStyle);
        vidJquery.fadeIn("slow");
        // for (var i in videoStyle) {
        //     screenRecording.style[i] = videoStyle[i]
        // }

    }
    else {
        vidJquery.fadeOut("slow");
    }
    

    
}) 