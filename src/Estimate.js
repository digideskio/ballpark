import { simulatorOptions } from './simulatoroptions';

export default class {
    constructor(estimate) {
        this.estimate = estimate;
    }
    
    /**
     * deviatedEstimate gets a random value within the 
     * standard deviation of the original estimate
     *
     * @return {Number} deviated estimate
     */
    get deviatedEstimate() {
        const min = this.estimate - simulatorOptions.standardDeviation;
        const max = this.estimate + simulatorOptions.standardDeviation;
        return this.randomNumberInRange(min, max);
    }
    
    get originalEstimate() {
        return this.estimate;
    }

    randomNumberInRange(min, max) {
        return (Math.random() * (max - min) + min);
    }
};