var webview = document.getElementById("widget");
webview.addEventListener("did-finish-load", function() {
  webview.insertCSS("#area-game { width: 900px }");
});
