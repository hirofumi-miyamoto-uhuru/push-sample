self.addEventListener("fetch", function (e) {
  console.log("fetched service worker");
});

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

workbox.precaching.precacheAndRoute([
  {
    url: "/index.html",
    revision: "1",
  },
  {
    url: "/assets/css/style.css",
    revision: "1",
  },
  {
    url: "/assets/js/script.js",
    revision: "1",
  },
]);
