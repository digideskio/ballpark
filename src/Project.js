import Estimate from './Estimate';
import { simulatorOptions } from './simulatoroptions';

export default class {
    constructor(estimates) {
        this.estimates = estimates;
    }
    
    /**
     * simulate() runs a Monte Carlo simulation
     * against the known estimates
     *  
     * @param {Number} iterations is the numbers of simulation cycles
     * @return {Object} max, min, originalEstimate, avg
     */
    simulate(iterations) {
        let durations = [];
        let min = Number.MAX_VALUE;
        let max = Number.MIN_VALUE;

        while (iterations > 0) {
            let duration = 0;
            
            for (const estimate of this.estimates) {
                const guess = estimate.deviatedEstimate;
                duration += guess;
            }

            durations.push(duration);
            
            if (duration > max) {
                max = duration;
            }
            
            if (duration < min) {
                min = duration;
            }
            
            iterations--;            
        }

        let originalEstimate = 0;
        for (const estimate of this.estimates) {
            originalEstimate += estimate.originalEstimate; 
        }

        const percentileValue = this.percentile(durations, simulatorOptions.percentile);

        return {
            max: Math.round(max),
            min: Math.round(min),
            originalEstimate,
            percentile: Math.round(percentileValue),
            avg: Math.round(durations.reduce((x, y) => x + y) / durations.length)              
        }
    }
    
    percentile(durations, targetPercentile) {
        const copy = durations.concat().sort();
        const percentileIndex = Math.floor((targetPercentile/100) * copy.length);
        return copy[percentileIndex];
    }
};