import Accordion from "../components/Accordion";



export let totalAffixWeight = 0;

const affixParser = affix => {
  let innerPrefix = Object.keys(affix); // Array // outer for-loop  -- string[]: "physical damage,added phys, etc"

  // Initializing totalAffixWeight
  for (let i = 0; i < innerPrefix.length; i++) {
    let affixMod = Object.keys(affix[innerPrefix[i]]);
    // <--- Here goes input check to remove from innerPrefix
    for (let j = 0; j < affixMod.length; j++) {
      const individualAffixWeight = affix[innerPrefix[i]][affixMod[j]]["affixWeight"];
      totalAffixWeight += individualAffixWeight;
    }
  }

  for (let i = 0; i < innerPrefix.length; i++) {
    let affixMod = Object.keys(affix[innerPrefix[i]]); // kind of confusing might have to clean this
    for (let j = 0; j < affixMod.length; j++) {
      const individualAffixWeight = affix[innerPrefix[i]][affixMod[j]]["affixWeight"];

      //Call accordion here

      console.log(innerPrefix[i]);
      console.log(affixMod[j]);
      console.log("affixWeight", individualAffixWeight);
      console.log((individualAffixWeight / totalAffixWeight) * 100 + "%");
      console.log("-----------");
    }
  }
};

export { affixParser as default };

/*
  Goal: Need to make sure to add Shaper mods as a radio-button
  User given drop-down menu and any items in selected menu are removed from the stack.

*/

// let affixMod = Object.keys(prefix[innerPrefix])[0] // change 0 to i // inner for-loop -- string[]: "Heavy, Serrated, ..."
// let affixWeight = parseInt(Object.keys(prefix[innerPrefix][affixMod])[2]); // not change with i -- int: "1000", AffixWeight

/*

export let affixNameArray = [];
export let affixWeightArray = [];

export let weightArray = [];
      affixNameArray.push(affixMod[j]);
      affixWeightArray.push(individualAffixWeight);

      weightArray.push([innerPrefix[i],[affixMod[j],individualAffixWeight]]);

*/
