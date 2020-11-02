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
