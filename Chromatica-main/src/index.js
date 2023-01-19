document.addEventListener('DOMContentLoaded', ()=> {
    const input = document.getElementById("file-input");
    const player = document.getElementById("player");
    const playButton = document.getElementById("play-button");
    const pauseButton = document.getElementById("pause-button");
    const recordButton = document.getElementById("record-button");
    const stopButton = document.getElementById("stop-button");
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

playButton.addEventListener("click", e => {
    if (player.paused) {
        player.play();
        playButton.innerHTML = "Pause";
    } else {
        player.pause();
        playButton.innerHTML = "Play";
    }
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
            
stopButton.addEventListener("click", e => {
    mediaRecorder.stop();
    recordButton.innerHTML = "Start Recording";
    stopButton.disabled = true;
    playButton.disabled = false;
    pauseButton.disabled = false;
    const recordedBlob = new Blob(chunks, { type: "video/mp4" });


    player.src = URL.createObjectURL(recordedBlob);

player.onloadedmetadata = function() {
    player.style.height = `${(player.videoHeight / player.videoWidth) * player.clientWidth}px`;
        };
});
    });
                recordButton.innerHTML = "Stop Recording";
                stopButton.disabled = false;
                } else {
                mediaRecorder.stop();
                recordButton.innerHTML = "Start Recording";
                stopButton.disabled = true;
                playButton.disabled = false;
                pauseButton.disabled = false;
                }
                });
                
stopButton.addEventListener("click", e => {
    mediaRecorder.stop();
    recordButton.innerHTML = "Start Recording";
    stopButton.disabled = true;
    playButton.disabled = false;
    pauseButton.disabled = false;
});
                
pauseButton.addEventListener("click", e => {
    if (player.paused) {
        player.play();
        pauseButton.innerHTML = "Pause";
            } else {
                player.pause();
                pauseButton.innerHTML = "Play";
            }
    });
                
player.addEventListener("play", e => {
    pauseButton.innerHTML = "Pause";
});
                
player.addEventListener("pause", e => {
    pauseButton.innerHTML = "Play";
    });
})

const brightnessButton = document.getElementById("brightness-button");

brightnessButton.addEventListener("click", e => {
    canvas.width = player.videoWidth;
    canvas.height = player.videoHeight;
    ctx.drawImage(player, 0, 0);
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        data[i] += 50;
        data[i + 1] += 50;
        data[i + 2] += 50;
    }
    ctx.putImageData(imageData, 0, 0);
    player.src = canvas.toDataURL();
});

