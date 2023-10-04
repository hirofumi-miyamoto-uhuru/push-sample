if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then((reg) => {
    console.log("Service worker registered.", reg);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const isPWA = window.matchMedia("(display-mode: standalone)").matches;

  isPWA
    ? addElement("div", "これは PWA です")
    : addElement("div", "これは PWA ではありません");
});

function addElement(el, inner) {
  const createdElement = document.createElement(el);
  createdElement.innerHTML = inner;
  document.body.append(createdElement);
}
