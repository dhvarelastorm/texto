const APP_DATA = {
    domSelectors: {
        textTxt: document.getElementById('text-txt')
    }
};

document.addEventListener("DOMContentLoaded", function() {
    APP_DATA.domSelectors.textTxt.innerText = moduleData.text.value;
    APP_DATA.domSelectors.textTxt.style.color = moduleData.color.value;
    APP_DATA.domSelectors.textTxt.style.fontFamily = moduleData["font family"].value;
    APP_DATA.domSelectors.textTxt.style.fontSize = moduleData.size.value + 'px';
});