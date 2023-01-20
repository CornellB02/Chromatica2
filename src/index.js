document.addEventListener('DOMContentLoaded', ()=> {
    const input = document.getElementById("file-input");
    const player = document.getElementById("player");
    const playButton = document.getElementById("play-button");
    const pauseButton = document.getElementById("pause-button");
    const recordButton = document.getElementById("record-button");
    // const stopButton = document.getElementById("stop-button");
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    const brightnessButton = document.getElementById("brightness-button");
    const seekBar = document.getElementById("seek-bar");
    const currentTime = document.getElementById("current-time");
    const totalTime = document.getElementById("total-time");
    const brightnessSlider = document.getElementById("brightness-slider");
    const applyButton = document.getElementById("apply-button");
// debugger 

    let brightness = 100;
    let stream;
    let mediaRecorder;

// Event listeners

input.addEventListener("change", e => {
    // console.log("hi")
    e.preventDefault()
    const file = e.target.files[0];
    player.src = URL.createObjectURL(file);
    player.onloadedmetadata = function() {
        player.style.height = `${(player.videoHeight / player.videoWidth) * player.clientWidth}px`;
        playButton.disabled = false;
    };
});

playButton.addEventListener("click", function() {
    player.play();
  });
  
  pauseButton.addEventListener("click", function() {
    player.pause();
  });

// playButton.addEventListener("click", e => {
//     if (player.paused) {
//         player.play();
//         playButton.innerHTML = "Pause";
//     } else {
//         player.pause();
//         playButton.innerHTML = "Play";
//     }
// });

seekBar.addEventListener("input", e => {
    player.currentTime = (player.duration / 100) * e.target.value;
});

player.addEventListener("timeupdate", e => {
    seekBar.value = (player.currentTime / player.duration) * 100;
});

seekBar.addEventListener("mousedown", e => {
    player.pause();
});

seekBar.addEventListener("mouseup", e => {
    player.play();
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

player.ontimeupdate = function() {
    // Update current time and total time displays
    currentTime.innerHTML = formatTime(player.currentTime);
    totalTime.innerHTML = formatTime(player.duration);

    // Update seek bar position
    seekBar.value = (player.currentTime / player.duration) * 100;
};

// Event listener for when the user seeks through the video
seekBar.addEventListener("input", function() {
    player.currentTime = (seekBar.value / 100) * player.duration;
});

seekBar.addEventListener("change", function() {
    const clickedTime = (seekBar.value / 100) * player.duration;
    console.log("The video is at " + formatTime(clickedTime) + " when you clicked");
});

recordButton.addEventListener("click", e => {
    if (recordButton.innerHTML === "Start Recording") {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(s => {
            stream = s;
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();

            const chunks = [];
            mediaRecorder.addEventListener("dataavailable", event => {
                chunks.push(event.data);
            });
        })
    }
})
            
// stopButton.addEventListener("click", e => {
//     mediaRecorder.stop();
//     recordButton.innerHTML = "Start Recording";
//     stopButton.disabled = true;
//     playButton.disabled = false;
//     pauseButton.disabled = false;
//     const recordedBlob = new Blob(chunks, { type: "video/mp4" });


//     player.src = URL.createObjectURL(recordedBlob);

// player.onloadedmetadata = function() {
//     player.style.height = `${(player.videoHeight / player.videoWidth) * player.clientWidth}px`;
//         };
// });
    // });
                // recordButton.innerHTML = "Stop Recording";
                // stopButton.disabled = false;
                // } else {
                // mediaRecorder.stop();
                // recordButton.innerHTML = "Start Recording";
                // stopButton.disabled = true;
                // playButton.disabled = false;
                // pauseButton.disabled = false;
                // }
                // });
                
// stopButton.addEventListener("click", e => {
//     mediaRecorder.stop();
//     recordButton.innerHTML = "Start Recording";
//     stopButton.disabled = true;
//     playButton.disabled = false;
//     pauseButton.disabled = false;
// });
                
// pauseButton.addEventListener("click", e => {
//     if (player.paused) {
//         player.play();
//         pauseButton.innerHTML = "Pause";
//             } else {
//                 player.pause();
//                 pauseButton.innerHTML = "Play";
//             }
//     });
                
    // player.addEventListener("play", e => {
    //     pauseButton.innerHTML = "Pause";
    // });
                
    // player.addEventListener("pause", e => {
    //     pauseButton.innerHTML = "Play";
    // });

    // let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // debugger
// brightnessButton.addEventListener("click", e => {
//     canvas.width = player.videoWidth;
//     canvas.height = player.videoHeight;
//     ctx.drawImage(player, 0, 0);
//     let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     let data = imageData.data;
//     for (let i = 0; i < data.length; i += 4) {
//         data[i] += 50;
//         data[i + 1] += 50;
//         data[i + 2] += 50;
//     }
//     ctx.putImageData(imageData, 0, 0);

    brightnessButton.addEventListener("click", e => {
        canvas.width = player.videoWidth;
        canvas.height = player.videoHeight;
        ctx.drawImage(player, 0, 0);
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let data = imageData.data;
        // debugger
        for (let i = 0; i < data.length; i += 4) {
            data[i] = data[i] * (brightness / 100);
            data[i + 1] = data[i + 1] * (brightness / 100);
            data[i + 2] = data[i + 2] * (brightness / 100);
        }
        ctx.putImageData(imageData, 0, 0);
        player.src = canvas.toDataURL() && player.src;
        });

    brightnessSlider.addEventListener("change", e => {
            const value = e.target.value;
            brightness = value;
            // You can use the value to adjust the brightness of the video.
        });

        
    applyButton.addEventListener("click", () => {
        player.src = canvas.toDataURL();
    });
});
// })
 
    