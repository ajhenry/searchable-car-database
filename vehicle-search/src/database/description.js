export const description = {
  atvtype: {
    description: "type of alternative fuel or advanced technology vehicle",
    properName: "Alternate fuel type"
  },
  barrels08: {
    description: "annual petroleum consumption in barrels for fuelType1 (1)",
    properName: "Gas consumption for Regular gas (barrels)"
  },
  barrelsA08: {
    description: "annual petroleum consumption in barrels for fuelType2 (1)",
    properName: "Gas consumption for Premium gas (barrels)"
  },
  charge120: {
    description: "time to charge an electric vehicle in hours at 120 V",
    properName: "120V charge time"
  },
  charge240: {
    description: "time to charge an electric vehicle in hours at 240 V",
    properName: "240V charge time"
  },
  city08: {
    description: "city MPG for fuelType1 (2), (11)",
    properName: "Regular gas city MPG"
  },
  city08U: {
    description: "unrounded city MPG for fuelType1 (2), (3)",
    properName: "Unrounded Regular gas city MPG"
  },
  cityA08: {
    description: "city MPG for fuelType2 (2)",
    properName: "Premium gas city MPG"
  },
  cityA08U: {
    description: "unrounded city MPG for fuelType2 (2), (3)",
    properName: "Unrounded Premium gas city MPG"
  },
  cityCD: {
    description:
      "city gasoline consumption (gallons/100 miles) in charge depleting mode (4)",
    properName: "Charge depleting mode gas cosumption"
  },
  cityE: {
    description: "city electricity consumption in kw-hrs/100 miles",
    properName: "City electricity consumption"
  },
  cityUF: {
    description: "EPA city utility factor (share of electricity) for PHEV",
    properName: "EPA city utility factor"
  },
  co2: {
    description: "tailpipe CO2 in grams/mile for fuelType1 (5)",
    properName: "Tailpipe CO2 in grams/mile (Regular gas)"
  },
  co2A: {
    description: "tailpipe CO2 in grams/mile for fuelType2 (5)",
    properName: "Tailpipe CO2 in grams/mile (Premium gas)"
  },
  co2TailpipeAGpm: {
    description: "tailpipe CO2 in grams/mile for fuelType2 (5)",
    properName: "Tailpipe CO2 in grams/mile (Premium gas)"
  },
  co2TailpipeGpm: {
    description: "tailpipe CO2 in grams/mile for fuelType1 (5)",
    properName: "Tailpipe CO2 in grams/mile (Regular gas)"
  },
  comb08: {
    description: "combined MPG for fuelType1 (2), (11)",
    properName: "Combined MPG (Regular gas)"
  },
  comb08U: {
    description: "unrounded combined MPG for fuelType1 (2), (3)",
    properName: "Unrounded combined MPG (Regular gas)"
  },
  combA08: {
    description: "combined MPG for fuelType2 (2)",
    properName: "Combined MPG (Premium gas)"
  },
  combA08U: {
    description: "unrounded combined MPG for fuelType2 (2), (3)",
    properName: "Unrounded combined MPG (Premium gas)"
  },
  combE: {
    description: "combined electricity consumption in kw-hrs/100 miles",
    properName: "Combined electricity consumption"
  },
  combinedCD: {
    description:
      "combined gasoline consumption (gallons/100 miles) in charge depleting mode (4)",
    properName: "Combined gas consumption in charge depleting mode"
  },
  combinedUF: {
    description: "EPA combined utility factor (share of electricity) for PHEV",
    properName: "EPA combined utility factor"
  },
  cylinders: {
    description: "engine cylinders",
    properName: "Engine cylinders"
  },
  displ: {
    description: "engine displacement in liters",
    properName: "Engine displacement (L)"
  },
  drive: { description: "drive axle type", properName: "Drive axle type" },
  engId: {
    description: "EPA model type index",
    properName: "EPA model type index"
  },
  eng_dscr: {
    description:
      "engine descriptor; see http://www.fueleconomy.gov/feg/findacarhelp.shtml#engine",
    properName: "Engine descriptor"
  },
  evMotor: {
    description: "electric motor (kw-hrs)",
    properName: "Electric motor"
  },
  feScore: {
    description: "EPA Fuel Economy Score (-1 = Not available)",
    properName: "EPA Fuel Economy Score"
  },
  fuelCost08: {
    description: "annual fuel cost for fuelType1 ($) (7)",
    properName: "Annual fuel cost (Regular gas)"
  },
  fuelCostA08: {
    description: "annual fuel cost for fuelType2 ($) (7)",
    properName: "Annual fuel cost (Premium gas)"
  },
  fuelType: {
    description: "fuel type with fuelType1 and fuelType2 (if applicable)",
    properName: "Fuel type with Regular and Premium"
  },
  fuelType1: {
    description:
      "fuel type 1. For single fuel vehicles, this will be the only fuel. For dual fuel vehicles, this will be the conventional fuel.",
    properName: "Regular gas"
  },
  fuelType2: {
    description:
      "fuel type 2. For dual fuel vehicles, this will be the alternative fuel (e.g. E85, Electricity, CNG, LPG). For single fuel vehicles, this field is not used",
    properName: "Premium gas"
  },
  ghgScore: {
    description: "EPA GHG score (-1 = Not available)",
    properName: "EPA GHG score"
  },
  ghgScoreA: {
    description:
      "EPA GHG score for dual fuel vehicle running on the alternative fuel (-1 = Not available)",
    properName: "EPA GHG score for alternative fuel"
  },
  guzzler: {
    description: "if G or T, this vehicle is subject to the gas guzzler tax",
    properName: "Subject to the gas guzzler tax"
  },
  highway08: {
    description: "highway MPG for fuelType1 (2), (11)",
    properName: "Highway MPG (Regular gas)"
  },
  highway08U: {
    description: "unrounded highway MPG for fuelType1 (2), (3)",
    properName: "Unrounded Highway MPG (Regular gas)"
  },
  highwayA08: {
    description: "highway MPG for fuelType2 (2)",
    properName: "Highway MPG (Premium gas)"
  },
  highwayA08U: {
    description: "unrounded highway MPG for fuelType2 (2),(3)",
    properName: "Unrounded Highway MPG (Regular gas)"
  },
  highwayCD: {
    description:
      "highway gasoline consumption (gallons/100miles) in charge depleting mode (4)",
    properName: "Highway gas consumption in charge depleting mode"
  },
  highwayE: {
    description: "highway electricity consumption in kw-hrs/100 miles",
    properName: "Highway electricity consumption"
  },
  highwayUF: {
    description: "EPA highway utility factor (share of electricity) for PHEV",
    properName: "EPA highway utility factor"
  },
  hlv: {
    description: "hatchback luggage volume (cubic feet) (8)",
    properName: "Hatchback luggage volume (ft³)"
  },
  hpv: {
    description: "hatchback passenger volume (cubic feet) (8)",
    properName: "hatchback passenger volume (ft³)"
  },
  id: { description: "vehicle record id", properName: "Vehicle record id" },
  lv2: {
    description: "2 door luggage volume (cubic feet) (8)",
    properName: "2 door luggage volume  (ft³)"
  },
  lv4: {
    description: "4 door luggage volume (cubic feet) (8)",
    properName: "4 door luggage volume (ft³)"
  },
  make: { description: "manufacturer (division)", properName: "Manufacturer" },
  mfrCode: {
    description: "3-character manufacturer code",
    properName: "3-character manufacturer code"
  },
  model: { description: "model name (carline)", properName: "Model" },
  mpgData: {
    description: "has My MPG data; see yourMpgVehicle and yourMpgDriverVehicle",
    properName: "My MPG data"
  },
  phevBlended: {
    description:
      "if true, this vehicle operates on a blend of gasoline and electricity in charge depleting mode",
    properName: "Operates on a blend of gas and electricity"
  },
  pv2: {
    description: "2-door passenger volume (cubic feet) (8)",
    properName: "2-door passenger volume (ft³)"
  },
  pv4: {
    description: "4-door passenger volume (cubic feet) (8)",
    properName: "4-door passenger volume (ft³)"
  },
  rangeA: {
    description: "EPA range for fuelType2",
    properName: "EPA range for Premium"
  },
  rangeCityA: {
    description: "EPA city range for fuelType2",
    properName: "EPA city range for Premium"
  },
  rangeHwyA: {
    description: "EPA highway range for fuelType2",
    properName: "EPA highway range for Premium"
  },
  trans_dscr: {
    description:
      "transmission descriptor; see http://www.fueleconomy.gov/feg/findacarhelp.shtml#trany",
    properName: "Transmission descriptor"
  },
  trany: { description: "transmission", properName: "Transmission" },
  UCity: {
    description:
      "unadjusted city MPG for fuelType1; see the description of the EPA test procedures",
    properName: "Unadjusted city MPG (Regular)"
  },
  UCityA: {
    description:
      "unadjusted city MPG for fuelType2; see the description of the EPA test procedures",
    properName: "Unadjusted city MPG (Premium)"
  },
  UHighway: {
    description:
      "unadjusted highway MPG for fuelType1; see the description of the EPA test procedures",
    properName: "unadjusted highway MPG for (Regular)"
  },
  UHighwayA: {
    description:
      "unadjusted highway MPG for fuelType2; see the description of the EPA test procedures",
    properName: "unadjusted highway MPG for (Premium)"
  },
  VClass: {
    description: "EPA vehicle size class",
    properName: "EPA vehicle size class"
  },
  year: { description: "model year", properName: "Model year" },
  youSaveSpend: {
    description:
      "you save/spend over 5 years compared to an average car ($). Savings are positive; a greater amount spent yields a negative number. For dual fuel vehicles, this is the cost savings for gasoline",
    properName: "Save/spend over 5 years"
  },
  sCharger: {
    description: "if S, this vehicle is supercharged",
    properName: "Supercharged"
  },
  tCharger: {
    description: "if T, this vehicle is turbocharged",
    properName: "Turbocharged"
  },
  c240Dscr: {
    description: "electric vehicle charger description",
    properName: "Electric vehicle charger"
  },
  charge240b: {
    description:
      "time to charge an electric vehicle in hours at 240 V using the alternate charger",
    properName: "Time to charge (240 V)"
  },
  c240bDscr: {
    description: "electric vehicle alternate charger description",
    properName: "Alternate charger description"
  },
  createdOn: {
    description: "date the vehicle record was created (ISO 8601 format)",
    properName: "Date created"
  },
  modifiedOn: {
    description: "date the vehicle record was last modified (ISO 8601 format)",
    properName: "Date modified"
  },
  startStop: {
    description:
      "vehicle has start-stop technology (Y, N, or blank for older vehicles)",
    properName: "Vehicle has start-stop"
  },
  phevCity: {
    description:
      "EPA composite gasoline-electricity city MPGe for plug-in hybrid vehicles",
    properName: "City EPA composite"
  },
  phevHwy: {
    description:
      "EPA composite gasoline-electricity highway MPGe for plug-in hybrid vehicles",
    properName: "Highway EPA composite"
  },
  phevComb: {
    description:
      "EPA composite gasoline-electricity combined city-highway MPGe for plug-in hybrid vehicles",
    properName: "Combined EPA composite"
  }
};
