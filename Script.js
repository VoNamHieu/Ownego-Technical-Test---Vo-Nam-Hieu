function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var circle = document.querySelector('.logo');
circle.style.backgroundColor = getRandomColor();

var clickCount = 0;

circle.addEventListener('click', function() {
    clickCount++;

    var currentColor = circle.style.backgroundColor;

    if (clickCount < 9) {
        var rgb = currentColor.substring(4, currentColor.length - 1).split(',').map(function(value) {
            return parseInt(value);
        });

        rgb[0] -= 20;
        rgb[1] -= 20;
        rgb[2] -= 20;

        rgb = rgb.map(function(value) {
            return Math.max(0, value);
        });

        var newColor = 'rgb(' + rgb.join(',') + ')';
        circle.style.backgroundColor = newColor;
    } else {
        circle.style.backgroundColor = '#000000';
    }
});
