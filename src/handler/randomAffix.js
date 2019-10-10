import Chance from "chance";

const chance = new Chance(); // to create random seed



console.log(chance.weighted(["a","b","c"],[1,2,100]));