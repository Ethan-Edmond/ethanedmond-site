var galleryButton = document.getElementById("galleryButton");
var aboutButton = document.getElementById("aboutButton");
var addThickeners = function (element) {
    var thicken = function () {
        element.style.fontWeight = 700;
    };
    var thinner = function () {
        element.style.fontWeight = 100;
    };
    element.addEventListener("mouseenter", thicken);
    element.addEventListener("mouseleave", thinner);
};

addThickeners(galleryButton);
addThickeners(aboutButton);
