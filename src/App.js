import React from "react";
import AffixParser from "./handler/loop";
import { prefix } from "./data/oneHandedSword";
import Accordion from "./components/Accordion";

function App() {



  return (
    <div>
    <AffixParser affix={prefix}/>
    </div>
  );
}

export default App;

/* Random Chance, not needed for now.
  const chance = new Chance();

  const weightName = chance.weighted(affixNameArray, affixWeightArray);
  // now match weightName to affixNameArray to get index
  const weightNameIndex = affixNameArray.indexOf(weightName);


  console.log(
    chance.weighted(affixNameArray, affixWeightArray),
    affixWeightArray[weightNameIndex],
    (affixWeightArray[weightNameIndex] / totalAffixWeight) * 100 + "%"
  );

*/


