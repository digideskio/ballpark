# Ballpark

Runs Monte Carlo simulation on project estimation. Input is a .csv file, a sample is included in /samples/sample.csv.

## Installation

1. clone this repo
2. npm install

## Usage

```
node ballpark.js [path to .csv file] (defaults to sample.csv)
```

The following ptions can be changed in /src/simulatoroptions.js
* standard deviation (defaults to 4)
* number of iterations (defaults to 1000)
* percentile (defaults to 90th)
* default data file 

## Output

Calculates the best case, worst case and 90th percentile project estimate.

```
simulation-duration: 11ms

    original estimate: 59, 
    calculated estimate: 59, 
    best case: 40, 
    worst case: 78,
    90th percentile: 67
```