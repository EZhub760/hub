function changeBackgroundColor() {
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
window.onload = function() {
    var title = document.getElementsByTagName("h1")[0];
    title.style.opacity = 0;
    var intervalId = setInterval(function() {
        title.style.opacity = Number(title.style.opacity) + 0.1;
        if (title.style.opacity >= 1) {
            clearInterval(intervalId);
        }
    }, 100);
}
