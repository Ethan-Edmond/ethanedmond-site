var makeElem = function (name) {
  var elem = {};
  elem.htmElement = document.getElementById(name);

  return elem;
};

var makeButton = function (name) {
  var button = makeElem(name);

  var thicken = function () {
    button.htmElement.style.fontWeight = 700;
  };
  button.htmElement.addEventListener("mouseenter",thicken);

  var thinner = function () {
    button.htmElement.style.fontWeight = 100;
  };
  button.htmElement.addEventListener("mouseleave", thinner);

  return button;
};

var buttonList = ["gallery-button", "about-button", "home-button", "project-button", "about-sect-button", "unplugged-button", "magic-8-button", "rogue-button"];
for (let i = 0; i < buttonList.length; i++) {
  if (document.getElementById(buttonList[i]) != null) {
    buttonList[i] = makeButton(buttonList[i]);
  }
}

// This is the code for the gallery carousel
var galleryButtonBoard = document.getElementById("gallery-button-board").children;
var makeGallery = function () {
  var galleryMain = document.getElementById("gallery-main");
  var galleryWrapper = galleryMain.children[0].children[0].children;
  var galleryProjects = [];
  for (let i = 1; i < galleryWrapper.length; i++){
    galleryProjects.push(galleryWrapper[i]);
  }
  return galleryProjects;
};

var galleryProjects = makeGallery();

var currentGalleryIndex = 0;
galleryProjects[currentGalleryIndex].style.display = "block";

var galleryCycleForward = function () {
  galleryProjects[currentGalleryIndex].style.display = "none";
  currentGalleryIndex += 1;
  currentGalleryIndex = currentGalleryIndex % galleryProjects.length;
  galleryProjects[currentGalleryIndex].style.display = "block";
};

var galleryCycleBack = function () {
  galleryProjects[currentGalleryIndex].style.display = "none";
  currentGalleryIndex -= 1;
  if (currentGalleryIndex < 0) {
    currentGalleryIndex = galleryProjects.length - 1;
  }
  galleryProjects[currentGalleryIndex].style.display = "block";
};

galleryButtonBoard[0].addEventListener("click", galleryCycleBack);
galleryButtonBoard[1].addEventListener("click",galleryCycleForward);
