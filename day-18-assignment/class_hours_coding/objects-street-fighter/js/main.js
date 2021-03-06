//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeSFCharacter(punch, kick, block, specialMove) {
  this.punch = punch;
  this.kick = kick;
  this.block = block;
  this.specialMove = specialMove;
  this.taunt = function () {
    alert(`You can't handle my ${specialMove}`);
  };
  this.runAway = function () {
    alert(`You can't catch me`);
  };
  this.roll = function () {
    alert(`Rolled right past you`);
  };
}

let ryu = new MakeSFCharacter("low", "high", true, "Hadouken");
console.log(ryu);
