#!/bin/bash
# get on-beer-list > dump as json
SRC=" http://www.fin.gov.on.ca/lists/beer-manufacturers-microbrewers-brands.csv"
CSV="src/assets/onBeerList.csv"
JSON="src/assets/onBeerList.json"
JQ="src/assets/onBeer.csv2json.jq"
wget "$SRC" -o $CSV
jq -R -s -f  $CSV > $JSON