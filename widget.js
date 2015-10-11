var webview = document.getElementById("widget");
webview.addEventListener("did-finish-load", function() {
  webview.insertCSS("#html, #body, #w, #main-ntg, #area-game { width: 900px }");
  webview.insertCSS("#body { min-width: 900px }");
  webview.insertCSS(".ntgnavi-r, #ntg-recommend, .area-naviapp, #foot { display: none; }");
});

var remote = require("remote");
var Menu = remote.require("menu");
var menu = Menu.buildFromTemplate([
  {
    label: 'kancollectron',
    submenu: [
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click: function() { remote.require('app').quit(); }
      },
    ]
  },
  {
    label: 'Tool',
    submenu: [
      {
        label: 'Toggle Audio Muted',
        accelerator: 'Command+A',
        click: function() {
          var muted = webview.isAudioMuted();
          webview.setAudioMuted(!muted);
        }
      }
    ]
  }
]);
Menu.setApplicationMenu(menu);
