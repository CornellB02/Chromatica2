/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', () => {\n  const input = document.getElementById(\"file-input\");\n  const player = document.getElementById(\"player\");\n  const playButton = document.getElementById(\"play-button\");\n  const pauseButton = document.getElementById(\"pause-button\");\n  const recordButton = document.getElementById(\"record-button\");\n  // const stopButton = document.getElementById(\"stop-button\");\n  const canvas = document.querySelector(\"#canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const brightnessButton = document.getElementById(\"brightness-button\");\n  const seekBar = document.getElementById(\"seek-bar\");\n  const currentTime = document.getElementById(\"current-time\");\n  const totalTime = document.getElementById(\"total-time\");\n  const brightnessSlider = document.getElementById(\"brightness-slider\");\n  const applyButton = document.getElementById(\"apply-button\");\n  // debugger \n\n  let brightness = 100;\n  let stream;\n  let mediaRecorder;\n\n  // Event listeners\n\n  input.addEventListener(\"change\", e => {\n    // console.log(\"hi\")\n    e.preventDefault();\n    const file = e.target.files[0];\n    player.src = URL.createObjectURL(file);\n    player.onloadedmetadata = function () {\n      player.style.height = `${player.videoHeight / player.videoWidth * player.clientWidth}px`;\n      playButton.disabled = false;\n    };\n  });\n  playButton.addEventListener(\"click\", function () {\n    player.play();\n  });\n  pauseButton.addEventListener(\"click\", function () {\n    player.pause();\n  });\n\n  // playButton.addEventListener(\"click\", e => {\n  //     if (player.paused) {\n  //         player.play();\n  //         playButton.innerHTML = \"Pause\";\n  //     } else {\n  //         player.pause();\n  //         playButton.innerHTML = \"Play\";\n  //     }\n  // });\n\n  seekBar.addEventListener(\"input\", e => {\n    player.currentTime = player.duration / 100 * e.target.value;\n  });\n  player.addEventListener(\"timeupdate\", e => {\n    seekBar.value = player.currentTime / player.duration * 100;\n  });\n  seekBar.addEventListener(\"mousedown\", e => {\n    player.pause();\n  });\n  seekBar.addEventListener(\"mouseup\", e => {\n    player.play();\n  });\n  function formatTime(time) {\n    const minutes = Math.floor(time / 60);\n    const seconds = Math.floor(time % 60);\n    return `${minutes}:${seconds < 10 ? \"0\" : \"\"}${seconds}`;\n  }\n  player.ontimeupdate = function () {\n    // Update current time and total time displays\n    currentTime.innerHTML = formatTime(player.currentTime);\n    totalTime.innerHTML = formatTime(player.duration);\n\n    // Update seek bar position\n    seekBar.value = player.currentTime / player.duration * 100;\n  };\n\n  // Event listener for when the user seeks through the video\n  seekBar.addEventListener(\"input\", function () {\n    player.currentTime = seekBar.value / 100 * player.duration;\n  });\n  seekBar.addEventListener(\"change\", function () {\n    const clickedTime = seekBar.value / 100 * player.duration;\n    console.log(\"The video is at \" + formatTime(clickedTime) + \" when you clicked\");\n  });\n  recordButton.addEventListener(\"click\", e => {\n    if (recordButton.innerHTML === \"Start Recording\") {\n      navigator.mediaDevices.getUserMedia({\n        video: true,\n        audio: true\n      }).then(s => {\n        stream = s;\n        mediaRecorder = new MediaRecorder(stream);\n        mediaRecorder.start();\n        const chunks = [];\n        mediaRecorder.addEventListener(\"dataavailable\", event => {\n          chunks.push(event.data);\n        });\n      });\n    }\n  });\n\n  // stopButton.addEventListener(\"click\", e => {\n  //     mediaRecorder.stop();\n  //     recordButton.innerHTML = \"Start Recording\";\n  //     stopButton.disabled = true;\n  //     playButton.disabled = false;\n  //     pauseButton.disabled = false;\n  //     const recordedBlob = new Blob(chunks, { type: \"video/mp4\" });\n\n  //     player.src = URL.createObjectURL(recordedBlob);\n\n  // player.onloadedmetadata = function() {\n  //     player.style.height = `${(player.videoHeight / player.videoWidth) * player.clientWidth}px`;\n  //         };\n  // });\n  // });\n  // recordButton.innerHTML = \"Stop Recording\";\n  // stopButton.disabled = false;\n  // } else {\n  // mediaRecorder.stop();\n  // recordButton.innerHTML = \"Start Recording\";\n  // stopButton.disabled = true;\n  // playButton.disabled = false;\n  // pauseButton.disabled = false;\n  // }\n  // });\n\n  // stopButton.addEventListener(\"click\", e => {\n  //     mediaRecorder.stop();\n  //     recordButton.innerHTML = \"Start Recording\";\n  //     stopButton.disabled = true;\n  //     playButton.disabled = false;\n  //     pauseButton.disabled = false;\n  // });\n\n  // pauseButton.addEventListener(\"click\", e => {\n  //     if (player.paused) {\n  //         player.play();\n  //         pauseButton.innerHTML = \"Pause\";\n  //             } else {\n  //                 player.pause();\n  //                 pauseButton.innerHTML = \"Play\";\n  //             }\n  //     });\n\n  // player.addEventListener(\"play\", e => {\n  //     pauseButton.innerHTML = \"Pause\";\n  // });\n\n  // player.addEventListener(\"pause\", e => {\n  //     pauseButton.innerHTML = \"Play\";\n  // });\n\n  // let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);\n  // debugger\n  // brightnessButton.addEventListener(\"click\", e => {\n  //     canvas.width = player.videoWidth;\n  //     canvas.height = player.videoHeight;\n  //     ctx.drawImage(player, 0, 0);\n  //     let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);\n  //     let data = imageData.data;\n  //     for (let i = 0; i < data.length; i += 4) {\n  //         data[i] += 50;\n  //         data[i + 1] += 50;\n  //         data[i + 2] += 50;\n  //     }\n  //     ctx.putImageData(imageData, 0, 0);\n\n  brightnessButton.addEventListener(\"click\", e => {\n    canvas.width = player.videoWidth;\n    canvas.height = player.videoHeight;\n    ctx.drawImage(player, 0, 0);\n    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);\n    let data = imageData.data;\n    // debugger\n    for (let i = 0; i < data.length; i += 4) {\n      data[i] = data[i] * (brightness / 100);\n      data[i + 1] = data[i + 1] * (brightness / 100);\n      data[i + 2] = data[i + 2] * (brightness / 100);\n    }\n    ctx.putImageData(imageData, 0, 0);\n    player.src = canvas.toDataURL() && player.src;\n  });\n  brightnessSlider.addEventListener(\"change\", e => {\n    const value = e.target.value;\n    brightness = value;\n    // You can use the value to adjust the brightness of the video.\n  });\n\n  applyButton.addEventListener(\"click\", () => {\n    player.src = canvas.toDataURL();\n  });\n});\n// })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnB1dCIsImdldEVsZW1lbnRCeUlkIiwicGxheWVyIiwicGxheUJ1dHRvbiIsInBhdXNlQnV0dG9uIiwicmVjb3JkQnV0dG9uIiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJicmlnaHRuZXNzQnV0dG9uIiwic2Vla0JhciIsImN1cnJlbnRUaW1lIiwidG90YWxUaW1lIiwiYnJpZ2h0bmVzc1NsaWRlciIsImFwcGx5QnV0dG9uIiwiYnJpZ2h0bmVzcyIsInN0cmVhbSIsIm1lZGlhUmVjb3JkZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJvbmxvYWRlZG1ldGFkYXRhIiwic3R5bGUiLCJoZWlnaHQiLCJ2aWRlb0hlaWdodCIsInZpZGVvV2lkdGgiLCJjbGllbnRXaWR0aCIsImRpc2FibGVkIiwicGxheSIsInBhdXNlIiwiZHVyYXRpb24iLCJ2YWx1ZSIsImZvcm1hdFRpbWUiLCJ0aW1lIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJvbnRpbWV1cGRhdGUiLCJpbm5lckhUTUwiLCJjbGlja2VkVGltZSIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ2aWRlbyIsImF1ZGlvIiwidGhlbiIsInMiLCJNZWRpYVJlY29yZGVyIiwic3RhcnQiLCJjaHVua3MiLCJldmVudCIsInB1c2giLCJkYXRhIiwid2lkdGgiLCJkcmF3SW1hZ2UiLCJpbWFnZURhdGEiLCJnZXRJbWFnZURhdGEiLCJpIiwibGVuZ3RoIiwicHV0SW1hZ2VEYXRhIiwidG9EYXRhVVJMIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWF0aWNhLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlLWlucHV0XCIpO1xuICAgIGNvbnN0IHBsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyXCIpO1xuICAgIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXktYnV0dG9uXCIpO1xuICAgIGNvbnN0IHBhdXNlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXVzZS1idXR0b25cIik7XG4gICAgY29uc3QgcmVjb3JkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWNvcmQtYnV0dG9uXCIpO1xuICAgIC8vIGNvbnN0IHN0b3BCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3AtYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3QgYnJpZ2h0bmVzc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnJpZ2h0bmVzcy1idXR0b25cIik7XG4gICAgY29uc3Qgc2Vla0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Vlay1iYXJcIik7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtdGltZVwiKTtcbiAgICBjb25zdCB0b3RhbFRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsLXRpbWVcIik7XG4gICAgY29uc3QgYnJpZ2h0bmVzc1NsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnJpZ2h0bmVzcy1zbGlkZXJcIik7XG4gICAgY29uc3QgYXBwbHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcGx5LWJ1dHRvblwiKTtcbi8vIGRlYnVnZ2VyIFxuXG4gICAgbGV0IGJyaWdodG5lc3MgPSAxMDA7XG4gICAgbGV0IHN0cmVhbTtcbiAgICBsZXQgbWVkaWFSZWNvcmRlcjtcblxuLy8gRXZlbnQgbGlzdGVuZXJzXG5cbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJoaVwiKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICBwbGF5ZXIuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICBwbGF5ZXIub25sb2FkZWRtZXRhZGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBwbGF5ZXIuc3R5bGUuaGVpZ2h0ID0gYCR7KHBsYXllci52aWRlb0hlaWdodCAvIHBsYXllci52aWRlb1dpZHRoKSAqIHBsYXllci5jbGllbnRXaWR0aH1weGA7XG4gICAgICAgIHBsYXlCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xufSk7XG5cbnBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIHBsYXllci5wbGF5KCk7XG4gIH0pO1xuICBcbiAgcGF1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIHBsYXllci5wYXVzZSgpO1xuICB9KTtcblxuLy8gcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4vLyAgICAgaWYgKHBsYXllci5wYXVzZWQpIHtcbi8vICAgICAgICAgcGxheWVyLnBsYXkoKTtcbi8vICAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBcIlBhdXNlXCI7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4vLyAgICAgICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gXCJQbGF5XCI7XG4vLyAgICAgfVxuLy8gfSk7XG5cbnNlZWtCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGUgPT4ge1xuICAgIHBsYXllci5jdXJyZW50VGltZSA9IChwbGF5ZXIuZHVyYXRpb24gLyAxMDApICogZS50YXJnZXQudmFsdWU7XG59KTtcblxucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1ldXBkYXRlXCIsIGUgPT4ge1xuICAgIHNlZWtCYXIudmFsdWUgPSAocGxheWVyLmN1cnJlbnRUaW1lIC8gcGxheWVyLmR1cmF0aW9uKSAqIDEwMDtcbn0pO1xuXG5zZWVrQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZSA9PiB7XG4gICAgcGxheWVyLnBhdXNlKCk7XG59KTtcblxuc2Vla0Jhci5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBlID0+IHtcbiAgICBwbGF5ZXIucGxheSgpO1xufSk7XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZSkge1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XG4gICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IodGltZSAlIDYwKTtcbiAgICByZXR1cm4gYCR7bWludXRlc306JHtzZWNvbmRzIDwgMTAgPyBcIjBcIiA6IFwiXCJ9JHtzZWNvbmRzfWA7XG59XG5cbnBsYXllci5vbnRpbWV1cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBVcGRhdGUgY3VycmVudCB0aW1lIGFuZCB0b3RhbCB0aW1lIGRpc3BsYXlzXG4gICAgY3VycmVudFRpbWUuaW5uZXJIVE1MID0gZm9ybWF0VGltZShwbGF5ZXIuY3VycmVudFRpbWUpO1xuICAgIHRvdGFsVGltZS5pbm5lckhUTUwgPSBmb3JtYXRUaW1lKHBsYXllci5kdXJhdGlvbik7XG5cbiAgICAvLyBVcGRhdGUgc2VlayBiYXIgcG9zaXRpb25cbiAgICBzZWVrQmFyLnZhbHVlID0gKHBsYXllci5jdXJyZW50VGltZSAvIHBsYXllci5kdXJhdGlvbikgKiAxMDA7XG59O1xuXG4vLyBFdmVudCBsaXN0ZW5lciBmb3Igd2hlbiB0aGUgdXNlciBzZWVrcyB0aHJvdWdoIHRoZSB2aWRlb1xuc2Vla0Jhci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgcGxheWVyLmN1cnJlbnRUaW1lID0gKHNlZWtCYXIudmFsdWUgLyAxMDApICogcGxheWVyLmR1cmF0aW9uO1xufSk7XG5cbnNlZWtCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjbGlja2VkVGltZSA9IChzZWVrQmFyLnZhbHVlIC8gMTAwKSAqIHBsYXllci5kdXJhdGlvbjtcbiAgICBjb25zb2xlLmxvZyhcIlRoZSB2aWRlbyBpcyBhdCBcIiArIGZvcm1hdFRpbWUoY2xpY2tlZFRpbWUpICsgXCIgd2hlbiB5b3UgY2xpY2tlZFwiKTtcbn0pO1xuXG5yZWNvcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGlmIChyZWNvcmRCdXR0b24uaW5uZXJIVE1MID09PSBcIlN0YXJ0IFJlY29yZGluZ1wiKSB7XG4gICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUsIGF1ZGlvOiB0cnVlIH0pLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICBzdHJlYW0gPSBzO1xuICAgICAgICAgICAgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNodW5rcyA9IFtdO1xuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKFwiZGF0YWF2YWlsYWJsZVwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgY2h1bmtzLnB1c2goZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG59KVxuICAgICAgICAgICAgXG4vLyBzdG9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbi8vICAgICBtZWRpYVJlY29yZGVyLnN0b3AoKTtcbi8vICAgICByZWNvcmRCdXR0b24uaW5uZXJIVE1MID0gXCJTdGFydCBSZWNvcmRpbmdcIjtcbi8vICAgICBzdG9wQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbi8vICAgICBwbGF5QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4vLyAgICAgcGF1c2VCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbi8vICAgICBjb25zdCByZWNvcmRlZEJsb2IgPSBuZXcgQmxvYihjaHVua3MsIHsgdHlwZTogXCJ2aWRlby9tcDRcIiB9KTtcblxuXG4vLyAgICAgcGxheWVyLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwocmVjb3JkZWRCbG9iKTtcblxuLy8gcGxheWVyLm9ubG9hZGVkbWV0YWRhdGEgPSBmdW5jdGlvbigpIHtcbi8vICAgICBwbGF5ZXIuc3R5bGUuaGVpZ2h0ID0gYCR7KHBsYXllci52aWRlb0hlaWdodCAvIHBsYXllci52aWRlb1dpZHRoKSAqIHBsYXllci5jbGllbnRXaWR0aH1weGA7XG4vLyAgICAgICAgIH07XG4vLyB9KTtcbiAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAvLyByZWNvcmRCdXR0b24uaW5uZXJIVE1MID0gXCJTdG9wIFJlY29yZGluZ1wiO1xuICAgICAgICAgICAgICAgIC8vIHN0b3BCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgIC8vIHJlY29yZEJ1dHRvbi5pbm5lckhUTUwgPSBcIlN0YXJ0IFJlY29yZGluZ1wiO1xuICAgICAgICAgICAgICAgIC8vIHN0b3BCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIHBsYXlCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBwYXVzZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICBcbi8vIHN0b3BCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuLy8gICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuLy8gICAgIHJlY29yZEJ1dHRvbi5pbm5lckhUTUwgPSBcIlN0YXJ0IFJlY29yZGluZ1wiO1xuLy8gICAgIHN0b3BCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuLy8gICAgIHBsYXlCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbi8vICAgICBwYXVzZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuLy8gfSk7XG4gICAgICAgICAgICAgICAgXG4vLyBwYXVzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4vLyAgICAgaWYgKHBsYXllci5wYXVzZWQpIHtcbi8vICAgICAgICAgcGxheWVyLnBsYXkoKTtcbi8vICAgICAgICAgcGF1c2VCdXR0b24uaW5uZXJIVE1MID0gXCJQYXVzZVwiO1xuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbi8vICAgICAgICAgICAgICAgICBwYXVzZUJ1dHRvbi5pbm5lckhUTUwgPSBcIlBsYXlcIjtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAvLyBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBsYXlcIiwgZSA9PiB7XG4gICAgLy8gICAgIHBhdXNlQnV0dG9uLmlubmVySFRNTCA9IFwiUGF1c2VcIjtcbiAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAvLyBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBhdXNlXCIsIGUgPT4ge1xuICAgIC8vICAgICBwYXVzZUJ1dHRvbi5pbm5lckhUTUwgPSBcIlBsYXlcIjtcbiAgICAvLyB9KTtcblxuICAgIC8vIGxldCBpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgLy8gZGVidWdnZXJcbi8vIGJyaWdodG5lc3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuLy8gICAgIGNhbnZhcy53aWR0aCA9IHBsYXllci52aWRlb1dpZHRoO1xuLy8gICAgIGNhbnZhcy5oZWlnaHQgPSBwbGF5ZXIudmlkZW9IZWlnaHQ7XG4vLyAgICAgY3R4LmRyYXdJbWFnZShwbGF5ZXIsIDAsIDApO1xuLy8gICAgIGxldCBpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4vLyAgICAgbGV0IGRhdGEgPSBpbWFnZURhdGEuZGF0YTtcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbi8vICAgICAgICAgZGF0YVtpXSArPSA1MDtcbi8vICAgICAgICAgZGF0YVtpICsgMV0gKz0gNTA7XG4vLyAgICAgICAgIGRhdGFbaSArIDJdICs9IDUwO1xuLy8gICAgIH1cbi8vICAgICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XG5cbiAgICBicmlnaHRuZXNzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gcGxheWVyLnZpZGVvV2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBwbGF5ZXIudmlkZW9IZWlnaHQ7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UocGxheWVyLCAwLCAwKTtcbiAgICAgICAgbGV0IGltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IGRhdGEgPSBpbWFnZURhdGEuZGF0YTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgICAgICBkYXRhW2ldID0gZGF0YVtpXSAqIChicmlnaHRuZXNzIC8gMTAwKTtcbiAgICAgICAgICAgIGRhdGFbaSArIDFdID0gZGF0YVtpICsgMV0gKiAoYnJpZ2h0bmVzcyAvIDEwMCk7XG4gICAgICAgICAgICBkYXRhW2kgKyAyXSA9IGRhdGFbaSArIDJdICogKGJyaWdodG5lc3MgLyAxMDApO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgICAgcGxheWVyLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKSAmJiBwbGF5ZXIuc3JjO1xuICAgICAgICB9KTtcblxuICAgIGJyaWdodG5lc3NTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICBicmlnaHRuZXNzID0gdmFsdWU7XG4gICAgICAgICAgICAvLyBZb3UgY2FuIHVzZSB0aGUgdmFsdWUgdG8gYWRqdXN0IHRoZSBicmlnaHRuZXNzIG9mIHRoZSB2aWRlby5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgXG4gICAgYXBwbHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcGxheWVyLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICB9KTtcbn0pO1xuLy8gfSlcbiBcbiAgICAiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLENB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\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWF0aWNhLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;