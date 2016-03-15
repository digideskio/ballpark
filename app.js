import { createReadStream } from 'fs';
import { Converter } from 'csvtojson';
import Estimate from './src/Estimate';
import Project from './src/Project';
import { simulatorOptions } from './src/simulatoroptions';

const estimates = [];
const converter = new Converter();
converter.on("record_parsed", (resultRow, rawRow, rowIndex) => {
    // add each row of the csv to the array of estimates
    estimates.push(new Estimate(resultRow.estimate)); 
});

converter.on("end_parsed", _ => {
    // csv parsing is complete, so run the simulation
    const project = new Project(estimates);

    console.time("simulation-duration");
    const simulation = project.simulate(simulatorOptions.iterations);
    console.timeEnd("simulation-duration");

    console.log(`
    original estimate: ${simulation.originalEstimate}, 
    calculated estimate: ${simulation.avg}, 
    best case: ${simulation.min}, 
    worst case: ${simulation.max},
    ${simulatorOptions.percentile}th percentile: ${simulation.percentile}
    `);    
});

// get filename from command line or fallback to options object
const { defaultDataFile = simulatorOptions.defaultDataFile } = { defaultDataFile: process.argv[2] };
createReadStream(defaultDataFile).pipe(converter);