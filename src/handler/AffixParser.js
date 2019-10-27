import React, {useState, Fragment} from "react";
import Accordion from "../components/Accordion";
import {List, ListItem, Divider, Grid} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "flex-direction" : "flex-start",
    "justify-content" : "center",
  },
  second: {
    "justify-content" : "space-between",
  }
}));

const AffixParser = ({ affix, tags }) => {
  const classes = useStyles();

  let currentAffixList = [];
  let sectionAffixWeightArray = [];

  let array = [];

  let totalAffixWeight = 0;
  let sectionAffixWeight = 0;

  let innerPrefix = Object.keys(affix); // Array // outer for-loop  -- string[]: "physical damage,added phys, etc"

  const toPercentage = (affixWeight, totalAffixWeight) => {
    return ((affixWeight / totalAffixWeight) * 100).toFixed(3) + "%";
  };

  // Initializing totalAffixWeight
  for (let i = 0; i < innerPrefix.length; i++) {
    let affixMod = Object.keys(affix[innerPrefix[i]]);
    // <--- Here goes input check to remove from innerPrefix
    for (let j = 0; j < affixMod.length; j++) {
      const individualAffixWeight = affix[innerPrefix[i]][affixMod[j]]["affixWeight"];
      totalAffixWeight += individualAffixWeight;
      sectionAffixWeight += individualAffixWeight;
    }
    sectionAffixWeightArray.push(sectionAffixWeight);
    sectionAffixWeight = 0; // Clear variable
  }

  for (let i = 0; i < innerPrefix.length; i++) {
    let affixMod = Object.keys(affix[innerPrefix[i]]); // kind of confusing might have to clean this

    for (let j = 0; j < affixMod.length; j++) {
      const individualAffixWeight = affix[innerPrefix[i]][affixMod[j]]["affixWeight"];

      currentAffixList.push(
        <Fragment key={`fragment+${j}`}>
          <ListItem className={classes.root} key={`parent+${j}`} component="div">
            <ListItem className={classes.root} key={affixMod[j]}>{affixMod[j]}</ListItem>
            <ListItem className={classes.root} key={individualAffixWeight}>{individualAffixWeight}</ListItem>
            <ListItem className={classes.root} key={toPercentage(individualAffixWeight, totalAffixWeight)}> {toPercentage(individualAffixWeight, totalAffixWeight)}</ListItem>
          </ListItem>
          <Divider/>
        </Fragment>
      );

    }

    array.push(
      <Fragment key={`fragment+${i}`}>
        <Grid>
          <Accordion title={innerPrefix[i]} subTitle={toPercentage(sectionAffixWeightArray[i],totalAffixWeight)} tags={tags[innerPrefix[i]]} key={i}>
            <List> {currentAffixList}</List>
          </Accordion>
        </Grid>
      </Fragment>
    );
    currentAffixList = [];
  }

  return <div>{array}</div>;
};

export default AffixParser;

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
