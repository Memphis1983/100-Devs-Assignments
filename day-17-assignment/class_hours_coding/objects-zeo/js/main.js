//Create a stopwatch object that has four properties and three methods

const stopWatch = {};

stopWatch.color = "black";
stopWatch.brand = "nike";
stopWatch.shape = "round";
stopWatch.size = "large";

stopWatch.start = function () {
  console.log("STARTING");
};

stopWatch.stop = function () {
  console.log("STOPPING");
};
stopWatch.sayBrand = function () {
  console.log(stopWatch.brand);
};
