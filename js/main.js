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

var buttonList = ["gallery-button", "about-button", "project-button", "about-sect-button", "unplugged-button", "magic-8-button", "rogue-button"];
for (let i = 0; i < buttonList.length; i++) {
  buttonList[i] = makeButton(buttonList[i]);
}

var makeImage = function (name) {
  var image = makeElem(name);

  var expand = function () {
    image.htmElement.style.borderWidth = "0px";
  };
  image.htmElement.addEventListener("mouseenter",expand);

  var compress = function () {
    image.htmElement.style.borderWidth = "5px";
  };
  image.htmElement.addEventListener("mouseleave",compress);

  return image;
};

var imageList = ["unplugged-image", "magic-8-ball-image", "rogue-pickings-image"];
for (let i = 0; i < imageList.length; i++) {
  imageList[i] = makeImage(imageList[i]);
};
