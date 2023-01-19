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

eval("document.addEventListener('DOMContentLoaded', () => {\n  const input = document.getElementById(\"file-input\");\n  const player = document.getElementById(\"player\");\n  const playButton = document.getElementById(\"play-button\");\n  const pauseButton = document.getElementById(\"pause-button\");\n  const recordButton = document.getElementById(\"record-button\");\n  const stopButton = document.getElementById(\"stop-button\");\n  let stream;\n  let mediaRecorder;\n\n  // Event listeners\n\n  input.addEventListener(\"change\", e => {\n    // console.log(\"hi\")\n    e.preventDefault();\n    const file = e.target.files[0];\n    player.src = URL.createObjectURL(file);\n    player.onloadedmetadata = function () {\n      player.style.height = `${player.videoHeight / player.videoWidth * player.clientWidth}px`;\n      playButton.disabled = false;\n    };\n  });\n  playButton.addEventListener(\"click\", e => {\n    if (player.paused) {\n      player.play();\n      playButton.innerHTML = \"Pause\";\n    } else {\n      player.pause();\n      playButton.innerHTML = \"Play\";\n    }\n  });\n  recordButton.addEventListener(\"click\", e => {\n    if (recordButton.innerHTML === \"Start Recording\") {\n      navigator.mediaDevices.getUserMedia({\n        video: true,\n        audio: true\n      }).then(s => {\n        stream = s;\n        mediaRecorder = new MediaRecorder(stream);\n        mediaRecorder.start();\n        const chunks = [];\n        mediaRecorder.addEventListener(\"dataavailable\", event => {\n          chunks.push(event.data);\n        });\n        stopButton.addEventListener(\"click\", e => {\n          mediaRecorder.stop();\n          recordButton.innerHTML = \"Start Recording\";\n          stopButton.disabled = true;\n          playButton.disabled = false;\n          pauseButton.disabled = false;\n          const recordedBlob = new Blob(chunks, {\n            type: \"video/mp4\"\n          });\n          player.src = URL.createObjectURL(recordedBlob);\n          player.onloadedmetadata = function () {\n            player.style.height = `${player.videoHeight / player.videoWidth * player.clientWidth}px`;\n          };\n        });\n      });\n      recordButton.innerHTML = \"Stop Recording\";\n      stopButton.disabled = false;\n    } else {\n      mediaRecorder.stop();\n      recordButton.innerHTML = \"Start Recording\";\n      stopButton.disabled = true;\n      playButton.disabled = false;\n      pauseButton.disabled = false;\n    }\n  });\n  stopButton.addEventListener(\"click\", e => {\n    mediaRecorder.stop();\n    recordButton.innerHTML = \"Start Recording\";\n    stopButton.disabled = true;\n    playButton.disabled = false;\n    pauseButton.disabled = false;\n  });\n  pauseButton.addEventListener(\"click\", e => {\n    if (player.paused) {\n      player.play();\n      pauseButton.innerHTML = \"Pause\";\n    } else {\n      player.pause();\n      pauseButton.innerHTML = \"Play\";\n    }\n  });\n  player.addEventListener(\"play\", e => {\n    pauseButton.innerHTML = \"Pause\";\n  });\n  player.addEventListener(\"pause\", e => {\n    pauseButton.innerHTML = \"Play\";\n  });\n});\nconst brightnessButton = document.getElementById(\"brightness-button\");\nbrightnessButton.addEventListener(\"click\", e => {\n  canvas.width = player.videoWidth;\n  canvas.height = player.videoHeight;\n  ctx.drawImage(player, 0, 0);\n  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);\n  let data = imageData.data;\n  for (let i = 0; i < data.length; i += 4) {\n    data[i] += 50;\n    data[i + 1] += 50;\n    data[i + 2] += 50;\n  }\n  ctx.putImageData(imageData, 0, 0);\n  player.src = canvas.toDataURL();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnB1dCIsImdldEVsZW1lbnRCeUlkIiwicGxheWVyIiwicGxheUJ1dHRvbiIsInBhdXNlQnV0dG9uIiwicmVjb3JkQnV0dG9uIiwic3RvcEJ1dHRvbiIsInN0cmVhbSIsIm1lZGlhUmVjb3JkZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJvbmxvYWRlZG1ldGFkYXRhIiwic3R5bGUiLCJoZWlnaHQiLCJ2aWRlb0hlaWdodCIsInZpZGVvV2lkdGgiLCJjbGllbnRXaWR0aCIsImRpc2FibGVkIiwicGF1c2VkIiwicGxheSIsImlubmVySFRNTCIsInBhdXNlIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidmlkZW8iLCJhdWRpbyIsInRoZW4iLCJzIiwiTWVkaWFSZWNvcmRlciIsInN0YXJ0IiwiY2h1bmtzIiwiZXZlbnQiLCJwdXNoIiwiZGF0YSIsInN0b3AiLCJyZWNvcmRlZEJsb2IiLCJCbG9iIiwidHlwZSIsImJyaWdodG5lc3NCdXR0b24iLCJjYW52YXMiLCJ3aWR0aCIsImN0eCIsImRyYXdJbWFnZSIsImltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsImkiLCJsZW5ndGgiLCJwdXRJbWFnZURhdGEiLCJ0b0RhdGFVUkwiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tYXRpY2EvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGUtaW5wdXRcIik7XG4gICAgY29uc3QgcGxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJcIik7XG4gICAgY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheS1idXR0b25cIik7XG4gICAgY29uc3QgcGF1c2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdXNlLWJ1dHRvblwiKTtcbiAgICBjb25zdCByZWNvcmRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlY29yZC1idXR0b25cIik7XG4gICAgY29uc3Qgc3RvcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcC1idXR0b25cIik7XG4gICAgbGV0IHN0cmVhbTtcbiAgICBsZXQgbWVkaWFSZWNvcmRlcjtcblxuLy8gRXZlbnQgbGlzdGVuZXJzXG5cbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJoaVwiKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICBwbGF5ZXIuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICBwbGF5ZXIub25sb2FkZWRtZXRhZGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBwbGF5ZXIuc3R5bGUuaGVpZ2h0ID0gYCR7KHBsYXllci52aWRlb0hlaWdodCAvIHBsYXllci52aWRlb1dpZHRoKSAqIHBsYXllci5jbGllbnRXaWR0aH1weGA7XG4gICAgICAgIHBsYXlCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xufSk7XG5cbnBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGlmIChwbGF5ZXIucGF1c2VkKSB7XG4gICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gXCJQYXVzZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiUGxheVwiO1xuICAgIH1cbn0pO1xuXG5yZWNvcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGlmIChyZWNvcmRCdXR0b24uaW5uZXJIVE1MID09PSBcIlN0YXJ0IFJlY29yZGluZ1wiKSB7XG4gICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUsIGF1ZGlvOiB0cnVlIH0pLnRoZW4ocyA9PiB7XG4gICAgICAgICAgICBzdHJlYW0gPSBzO1xuICAgICAgICAgICAgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNodW5rcyA9IFtdO1xuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKFwiZGF0YWF2YWlsYWJsZVwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgY2h1bmtzLnB1c2goZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuc3RvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgcmVjb3JkQnV0dG9uLmlubmVySFRNTCA9IFwiU3RhcnQgUmVjb3JkaW5nXCI7XG4gICAgc3RvcEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgcGxheUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHBhdXNlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgY29uc3QgcmVjb3JkZWRCbG9iID0gbmV3IEJsb2IoY2h1bmtzLCB7IHR5cGU6IFwidmlkZW8vbXA0XCIgfSk7XG5cblxuICAgIHBsYXllci5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHJlY29yZGVkQmxvYik7XG5cbnBsYXllci5vbmxvYWRlZG1ldGFkYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgcGxheWVyLnN0eWxlLmhlaWdodCA9IGAkeyhwbGF5ZXIudmlkZW9IZWlnaHQgLyBwbGF5ZXIudmlkZW9XaWR0aCkgKiBwbGF5ZXIuY2xpZW50V2lkdGh9cHhgO1xuICAgICAgICB9O1xufSk7XG4gICAgfSk7XG4gICAgICAgICAgICAgICAgcmVjb3JkQnV0dG9uLmlubmVySFRNTCA9IFwiU3RvcCBSZWNvcmRpbmdcIjtcbiAgICAgICAgICAgICAgICBzdG9wQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZWRpYVJlY29yZGVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICByZWNvcmRCdXR0b24uaW5uZXJIVE1MID0gXCJTdGFydCBSZWNvcmRpbmdcIjtcbiAgICAgICAgICAgICAgICBzdG9wQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwbGF5QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcGF1c2VCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG5zdG9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBtZWRpYVJlY29yZGVyLnN0b3AoKTtcbiAgICByZWNvcmRCdXR0b24uaW5uZXJIVE1MID0gXCJTdGFydCBSZWNvcmRpbmdcIjtcbiAgICBzdG9wQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBwbGF5QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgcGF1c2VCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn0pO1xuICAgICAgICAgICAgICAgIFxucGF1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgIGlmIChwbGF5ZXIucGF1c2VkKSB7XG4gICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgIHBhdXNlQnV0dG9uLmlubmVySFRNTCA9IFwiUGF1c2VcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgcGF1c2VCdXR0b24uaW5uZXJIVE1MID0gXCJQbGF5XCI7XG4gICAgICAgICAgICB9XG4gICAgfSk7XG4gICAgICAgICAgICAgICAgXG5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBsYXlcIiwgZSA9PiB7XG4gICAgcGF1c2VCdXR0b24uaW5uZXJIVE1MID0gXCJQYXVzZVwiO1xufSk7XG4gICAgICAgICAgICAgICAgXG5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBhdXNlXCIsIGUgPT4ge1xuICAgIHBhdXNlQnV0dG9uLmlubmVySFRNTCA9IFwiUGxheVwiO1xuICAgIH0pO1xufSlcblxuY29uc3QgYnJpZ2h0bmVzc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnJpZ2h0bmVzcy1idXR0b25cIik7XG5icmlnaHRuZXNzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBjYW52YXMud2lkdGggPSBwbGF5ZXIudmlkZW9XaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gcGxheWVyLnZpZGVvSGVpZ2h0O1xuICAgIGN0eC5kcmF3SW1hZ2UocGxheWVyLCAwLCAwKTtcbiAgICBsZXQgaW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGxldCBkYXRhID0gaW1hZ2VEYXRhLmRhdGE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIGRhdGFbaV0gKz0gNTA7XG4gICAgICAgIGRhdGFbaSArIDFdICs9IDUwO1xuICAgICAgICBkYXRhW2kgKyAyXSArPSA1MDtcbiAgICB9XG4gICAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xuICAgIHBsYXllci5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG59KTtcblxuIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFLO0VBQy9DLE1BQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsWUFBWSxDQUFDO0VBQ25ELE1BQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDRyxjQUFjLENBQUMsUUFBUSxDQUFDO0VBQ2hELE1BQU1FLFVBQVUsR0FBR0wsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3pELE1BQU1HLFdBQVcsR0FBR04sUUFBUSxDQUFDRyxjQUFjLENBQUMsY0FBYyxDQUFDO0VBQzNELE1BQU1JLFlBQVksR0FBR1AsUUFBUSxDQUFDRyxjQUFjLENBQUMsZUFBZSxDQUFDO0VBQzdELE1BQU1LLFVBQVUsR0FBR1IsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3pELElBQUlNLE1BQU07RUFDVixJQUFJQyxhQUFhOztFQUVyQjs7RUFFQVIsS0FBSyxDQUFDRCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVVLENBQUMsSUFBSTtJQUNsQztJQUNBQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQixNQUFNQyxJQUFJLEdBQUdGLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlCWCxNQUFNLENBQUNZLEdBQUcsR0FBR0MsR0FBRyxDQUFDQyxlQUFlLENBQUNMLElBQUksQ0FBQztJQUN0Q1QsTUFBTSxDQUFDZSxnQkFBZ0IsR0FBRyxZQUFXO01BQ2pDZixNQUFNLENBQUNnQixLQUFLLENBQUNDLE1BQU0sR0FBSSxHQUFHakIsTUFBTSxDQUFDa0IsV0FBVyxHQUFHbEIsTUFBTSxDQUFDbUIsVUFBVSxHQUFJbkIsTUFB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\n//# sourceURL=webpack-internal:///./src/index.js\n");

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