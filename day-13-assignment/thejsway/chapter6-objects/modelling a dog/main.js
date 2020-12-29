// TODO: create the dog object here
const dog = {
  name: "Fang",
  species: "boarhound",
  size: 75,
  //   bark: "Grrr! Grrr!",
                           
  describe() {             
    return `${this.name} is a ${this.species} dog measuring ${this.size}`;
  },                       
                           
  bark() {                 
    return `Grrr! Grrr!`;  
  },                       
};                         
                           
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
                           