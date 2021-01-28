//Create a mouse object that has four properties and three methods
const mouse = {};
mouse.brand = "logitech";
mouse.ergo = true;
mouse.model = "mx ergo";
mouse.trackball = true;

mouse.leftClick = function () {
  console.log("Click left");
};
mouse.rightClick = function () {
  console.log("Click right");
};
mouse.scrollWheel = function () {
  console.log("Jump");
};
 
