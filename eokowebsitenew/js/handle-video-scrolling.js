const vidJquery = $("#video-screen-recording")
const vidMobile = document.getElementById('video-mobile')
const screenRecording = vidJquery[0]
const target = $("#begin-video-animation")
// console.log('screenRecording', screenRecording)
var isMobile = window.matchMedia("only screen and (max-width: 760px)");
    

console.log('isMobile', isMobile.matches)

if (isMobile.matches) {
    vidMobile.style.display = 'block'
}
else {
    document.addEventListener("scroll", function(event) {

        console.log("scrolltop", $(window).scrollTop())
        const scrollTop = $(window).scrollTop()
        const offset = target.offset().top

        //Activate video when user scrolls beneath the div
        if (scrollTop > offset) {
            screenRecording.play();
            let videoStyle = {
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
}