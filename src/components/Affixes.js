import React, { useState, useContext, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core";
import AffixContext from "../context/affixes-context";

const Affixes = () => {
  const { prefixes, setPrefixes } = useContext(AffixContext);
  const [values, setValues] = useState({
    affix: ""
  });

  const [holder, setHolder] = useState({});
  let arrayHolder = [];

  let innerAffix = Object.keys(prefixes); // prefixes + holder
  let heldInnerAffix = Object.keys(holder);

  let affixlist = heldInnerAffix.filter((affix) => {
     return !innerAffix.includes(affix); // <-- Left off
  })

  const handleChange = ({ target }) => {
    setValues(oldValues => ({
      ...oldValues,
      [target.name]: target.value
    }));


    const prop = target.value;

    const newObject = Object.keys(prefixes).reduce((prefix, key) => {
      if(key !== prop){
        prefix[key] = prefixes[key]
      } else {
        setHolder(currentState => ({
          ...currentState,
          [key]:prefixes[key]
        }));

      }

      return prefix;
      // instead of removing we grab the "prefix" add it to a state and use that state to read menuitems

    },{});
    setPrefixes(newObject);

  };

  useEffect(() => {
    console.log("holder1:",holder );
    heldInnerAffix = Object.keys(holder);

    let affixlist = innerAffix.filter((affix) => {
      return !heldInnerAffix.includes(affix);
   })
  })

  

  return (
    <FormControl>
      <InputLabel shrink htmlFor="affix-label-placeholder">
        Affixes
      </InputLabel>
      <Select
        value={values.affix}
        onChange={handleChange}
        inputProps={{
          name: "affix",
          id: "affix-label-placeholder"
        }}
        displayEmpty
        name="affix"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {affixlist.map(affix => {
          return (
            <MenuItem key={affix} value={affix}>
              {affix}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>Affix 1</FormHelperText>
    </FormControl>
  );
};

export default Affixes;

// Grab affixes from
