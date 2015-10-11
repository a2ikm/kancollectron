var webview = document.getElementById("widget");
webview.addEventListener("did-finish-load", function() {
  webview.insertCSS("#html, #body, #w, #main-ntg, #area-game { width: 900px }");
  webview.insertCSS("#body { min-width: 900px }");
  webview.insertCSS(".ntgnavi-r, #ntg-recommend, .area-naviapp, #foot { display: none; }");
});

var path = require("path");
var homeDir = require("home-dir");
var strftime = require("strftime");
var mkdirp = require("mkdirp");

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
      },
      {
        label: 'Capture Screen',
        accelerator: 'Command+C',
        click: function(item, focusedWindow) {
          focusedWindow.capturePage(function(image) {
            var dir = path.join(homeDir(), "Documents", "kancollectron");
            mkdirp(dir, function(err) {
              if (err) {
                alert(err);
              } else {
                var out = path.join(dir, strftime("%Y%m%d%H%M%S.png"));
                remote.require("fs").writeFile(out, image.toPng());
              }
            });
          });
        }
      }
    ]
  }
]);
Menu.setApplicationMenu(menu);
