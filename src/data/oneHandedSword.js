export const prefix = {
  "% increased Physical Damage": {
    Heavy: { ilvl: 1, value: "+(15-19)", affixWeight: 1000 },
    Serrated: { ilvl: 11, value: "+(50–64)", affixWeight: 1000 },
    Wicked: { ilvl: 23, value: "+(65–84)", affixWeight: 1000 },
    Vicious: { ilvl: 35, value: "+(85–109)", affixWeight: 400 },
    Bloodthirsty: { ilvl: 46, value: "+(110–134)", affixWeight: 200 },
    Cruel: { ilvl: 60, value: "+(35–154)", affixWeight: 100 },
    Tyrannical: { ilvl: 73, value: "+(155–169)", affixWeight: 50 },
    Merciless: { ilvl: 83, value: "+(170–179)", affixWeight: 25 }
  },
  "Adds # to # Physical Damage": {
    Glinting: { ilvl: 2, value: "1 to (2–3)", affixWeight: 1000 },
    Burnished: { ilvl: 13, value: "(4–5) to (8–9)", affixWeight: 1000 },
    Polished: { ilvl: 21, value: "(6–8) to (13–15)", affixWeight: 1000 },
    Honed: { ilvl: 29, value: "(7–11) to (16–19)", affixWeight: 1000 },
    Gleaming: { ilvl: 36, value: "(9–13) to (20–24)", affixWeight: 1000 },
    Annealed: { ilvl: 46, value: "(13–17) to (26–30)", affixWeight: 800 },
    "Razor-sharp": { ilvl: 54, value: "(14–19) to (29–35", affixWeight: 600 },
    Tempered: { ilvl: 65, value: "(17–24) to (36–41)", affixWeight: 400 },
    Flaring: { ilvl: 77, value: "(20–27) to (41–49)", affixWeight: 200 }
  }
};

export const prefix2 = [
  {
    id: 1,
    title: "% increased Physical Damage",
    tags: ["physical", "attack"],
    affixes: [
      {
        id: 1,
        affix: "Heavy",
        ilvl: 1,
        value: "+(15-19)",
        affixWeight: 1000
      }
    ]
  },
  {}
];


export const prefixTags = {
  "% increased Physical Damage": ["physical", "attack"],
  "Adds # to # Physical Damage": ["physical", "attack"]
};

export const suffixTags = {
  "# to Strength": ["physical"],
  "# to Dexterity": ["physical"],
  "Adds # to # Physical Damage": ["physical", "attack"]
};

export const suffix = {
  "# to Strength": {
    "of the Brute": { ilvl: 1, value: "+(8–12)", affixWeight: 1000 },
    "of the Wrestler": { ilvl: 11, value: "+(13–17)", affixWeight: 1000 },
    "of the Bear": { ilvl: 22, value: "+(18–22)", affixWeight: 1000 },
    "of the Lion": { ilvl: 33, value: "+(23–27)", affixWeight: 1000 },
    "of the Gorilla": { ilvl: 44, value: "+(28–32)", affixWeight: 1000 },
    "of the Goliath": { ilvl: 55, value: "+(33–37)", affixWeight: 1000 },
    "of the Leviathan": { ilvl: 66, value: "+(38–42)", affixWeight: 1000 },
    "of the Titan": { ilvl: 74, value: "+(43–50)", affixWeight: 1000 },
    "of the Gods": { ilvl: 82, value: "+(51–55)", affixWeight: 1000 }
  },
  "# to Dexterity": {
    "of the Mongoose": { ilvl: 1, value: "+(8–12)", affixWeight: 1000 },
    "of the Lynx": { ilvl: 11, value: "+(13–17)", affixWeight: 1000 },
    "of the Fox": { ilvl: 22, value: "+(18–22)", affixWeight: 1000 },
    "of the Falcon": { ilvl: 33, value: "+(23–27)", affixWeight: 1000 },
    "of the Panther": { ilvl: 44, value: "+(28–32)", affixWeight: 1000 },
    "of the Leopard": { ilvl: 55, value: "+(33–37)", affixWeight: 1000 },
    "of the Jaguar": { ilvl: 66, value: "+(38–42)", affixWeight: 1000 },
    "of the Phantom": { ilvl: 74, value: "+(43–50)", affixWeight: 1000 },
    "of the Wind": { ilvl: 82, value: "+(51–55)", affixWeight: 1000 }
  },
  "Adds # to # Physical Damage": {
    Glinting: { ilvl: 2, value: "1 to (2–3)", affixWeight: 1000 },
    Burnished: { ilvl: 13, value: "(4–5) to (8–9)", affixWeight: 1000 },
    Polished: { ilvl: 21, value: "(6–8) to (13–15)", affixWeight: 1000 },
    Honed: { ilvl: 29, value: "(7–11) to (16–19)", affixWeight: 1000 },
    Gleaming: { ilvl: 36, value: "(9–13) to (20–24)", affixWeight: 1000 },
    Annealed: { ilvl: 46, value: "(13–17) to (26–30)", affixWeight: 800 },
    "Razor-sharp": { ilvl: 54, value: "(14–19) to (29–35", affixWeight: 600 },
    Tempered: { ilvl: 65, value: "(17–24) to (36–41)", affixWeight: 400 },
    Flaring: { ilvl: 77, value: "(20–27) to (41–49)", affixWeight: 200 }
  }
};
