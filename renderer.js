const { remote } = require('electron');

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


var closeEl = initCloseBtn();
var minimizeEl = initMinimizeBtn();

function initCloseBtn() {
  var closeEl = document.querySelector(".close");
  if (closeEl) {
    closeEl.addEventListener('click', function() {
      var window = remote.getCurrentWindow();
      window.close();
    });
  };
  return closeEl;
}

function initMinimizeBtn() {
  var minimizeEl = document.querySelector(".minimize");
  if (minimizeEl) {
    minimizeEl.addEventListener('click', function() {
      var window = remote.getCurrentWindow();
      window.minimize();
    });
  };
  return minimizeEl;
}