"use strict";
const deviceEl = document.getElementById('phone'), iframeEl = document.getElementById('frame'), controlsEl = document.getElementById('controls'), viewsEl = document.getElementById('views'), inputEls = {
    src: document.getElementById('iframeURL'),
    width: document.getElementById('iframeWidth'),
    height: document.getElementById('iframeHeight'),
};
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function updateView(view) {
    if (deviceEl.classList.contains('rotate')) {
        deviceEl.classList.remove('rotate');
        await wait(10);
    }
    if (view) {
        deviceEl.className = 'phone view_' + view;
        if ('table' === view) {
            await wait(300);
            deviceEl.classList.add('rotate');
        }
    }
}
function updateIframe() {
    iframeEl.src = inputEls.src.value;
    deviceEl.style.width = `${inputEls.width.value}px`;
    deviceEl.style.height = `${inputEls.height.value}px`;
}
updateIframe();
controlsEl.addEventListener('change', function () {
    updateIframe();
});
viewsEl.addEventListener('click', function (evt) {
    updateView((evt.target && evt.target.value) || '');
});
//# sourceMappingURL=index.js.map