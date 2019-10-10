import React from "react";
import Accordion from "../components/Accordion";

const AffixParser = ({affix}) => {
  let currentAffixListName = [];
  let currentAffixListWeight = [];
  let currentAffixListPercentages = [];

  let array = [];

  let totalAffixWeight = 0;

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
     // <Accordion title="potato"/>
      console.log(innerPrefix[i]);
      console.log(affixMod[j]);
      console.log("affixWeight", individualAffixWeight);
      console.log(((individualAffixWeight / totalAffixWeight) * 100).toFixed(3) + "%");
      console.log("-----------");

      currentAffixListName.push(
        <ul className="align-item" key={j}>{affixMod[j]}</ul>
      )
      currentAffixListWeight.push(
        <ul className="align-item" key={j}>{individualAffixWeight}</ul>
      )
      currentAffixListPercentages.push(
        <ul className="align-item" key={j}>{((individualAffixWeight / totalAffixWeight) * 100).toFixed(3) + "%"}</ul>
      )
    }
    array.push(<Accordion title={innerPrefix[i]} key={i}>
      <div className="align">{currentAffixListName}</div>
      <div className="align">{currentAffixListWeight}</div>
      <div className="align align--right">{currentAffixListPercentages}</div>
      </Accordion>)
      currentAffixListName = [];
      currentAffixListWeight = [];
      currentAffixListPercentages = [];
  }
  return (
    <div>
      {array}
    </div>
  )
}

export default AffixParser


// Think of using useRef to grab accordion so ucan add individual affixes

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
