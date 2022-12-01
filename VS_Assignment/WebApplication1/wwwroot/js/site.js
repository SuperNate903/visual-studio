// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var id = null;
function changeColor() {
    var elem = document.getElementById("color");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 400) {
            clearInterval(id);
        } else {
            pos++;
            var color = 0xFF - (pos * 0.6375) << 16 | 0xFF - (pos * 0.6375) << 8 | 0xFF - (pos * 0.475);
            elem.style.backgroundColor = `#${color.toString(16).padStart(6, "0")}`;
        }
    }
}

changeColor()