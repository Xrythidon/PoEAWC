import React, {useState, useReducer} from "react";
import AffixParser from "./handler/AffixParser";
import { prefix, suffix, prefixTags, suffixTags } from "./data/oneHandedSword";
import { Paper, Grid, Typography } from "@material-ui/core";
import Affixes from "./components/Affixes";
import AffixesContext from "./context/affixes-context"

function App() {
  const [prefixes, setPrefixes] = useState(prefix);
  const [suffixes, setSuffixes] = useState(suffix)
  const [pTags, setPTags] = useState(prefixTags)
  const [sTags, setSTags] = useState(suffixTags)



  return (
    <AffixesContext.Provider value={{prefixes,setPrefixes,suffixes,setSuffixes,pTags,sTags}}>
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h3" style={{padding: 10, "textAlign": "center"}}>Choose Affixes</Typography>
          <Paper style={{"textAlign": "center"}}>
            <Affixes/>
          </Paper> 
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3" style={{padding: 10, "textAlign": "center"}}>Prefixes</Typography>
          <Paper style={{marginLeft: 100}}><AffixParser affix={prefixes} tags={pTags}/></Paper> 
        </Grid>
        <Grid item xs={6}>
        <Typography variant="h3" style={{padding: 10, "textAlign": "center"}}>Suffixes</Typography>
          <Paper style={{marginRight: 100}}><AffixParser affix={suffixes} tags={sTags}/></Paper>
        </Grid>
      </Grid>
    </AffixesContext.Provider>
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
