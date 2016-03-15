import assert from 'assert';
import Estimate from '../src/Estimate';
import Project from '../src/Project';
import { simulatorOptions } from '../src/simulatoroptions';

describe('Project simulator', function() {
  describe('#simulate()', function () {
    it('should return within standard deviation of non-deviated values', function () {        
        const estimates = [
            new Estimate(5),
            new Estimate(10),
            new Estimate(15),
            new Estimate(3),
            new Estimate(6),
            new Estimate(12),
            new Estimate(8)  
        ];     

        let originalEstimate = 0;
        for (const estimate of estimates) {
            originalEstimate += estimate.originalEstimate; 
        }
     
        const project = new Project(estimates);
        const simulation = project.simulate(simulatorOptions.iterations);
        const deviation = Math.max(simulation.avg, originalEstimate) - Math.min(simulation.avg, originalEstimate);

        assert(deviation <= simulatorOptions.standardDeviation, `simulation deviated by: ${deviation}, expected: ${simulatorOptions.standardDeviation}`);
    });
  });
});