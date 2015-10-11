var webview = document.getElementById("widget");
webview.addEventListener("did-finish-load", function() {
  webview.insertCSS("#html, #body, #w, #main-ntg, #area-game { width: 900px }");
  webview.insertCSS("#body { min-width: 900px }");
  webview.insertCSS(".ntgnavi-r, #ntg-recommend, .area-naviapp, #foot { display: none; }");
});
