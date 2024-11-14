var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
    val.addEventListener("mouseleave", () => {
        val.childNodes[3].style.opacity = 0;
    });
    val.addEventListener("mousemove", (dets) => {
        val.childNodes[3].style.opacity = 1;
        val.childNodes[3].style.left = dets.x + "px";
        val.childNodes[3].style.transform = 'rotate(10deg)';
    });
});