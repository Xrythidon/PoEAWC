import React from "react";
import AffixParser from "./handler/loop";
import { prefix, suffix, prefixTags, suffixTags } from "./data/oneHandedSword";
import { Paper, Grid, Typography } from "@material-ui/core";

function App() {

  return (
    <div>
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={8}>
        <Grid item>
          <Typography variant="h3" style={{padding: 10, "textAlign": "center"}}>Prefixes</Typography>
          <Paper><AffixParser affix={prefix} tags={prefixTags}/></Paper> 
        </Grid>
        <Grid item>
        <Typography variant="h3" style={{padding: 10, "textAlign": "center"}}>Suffixes</Typography>
          <Paper><AffixParser affix={suffix} tags={suffixTags}/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

/*
MVP Goals:
Get Dropdown to work and rerender percentages
 1-> Display Dropdown Above Affixes
    - Make dropdown for prefix and suffix
 - Be able to only choose from affix mods
 - Handle Shaper/Elder with checkbox button.

 2-> Create Routing for other baseTypes


 Notes: If drop-down item is selected remove from affix pool
 pass down selected array from select to affix

*/



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
