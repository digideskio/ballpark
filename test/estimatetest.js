import assert from 'assert';
import Estimate from '../src/Estimate';
import { simulatorOptions } from '../src/simulatoroptions';

describe('Estimate range randomiser', function() {
  describe('#deviatedEstimate', function () {
    it('should return within standard deviation', function () {
        const originalEstimate = 5;
        const estimate = new Estimate(originalEstimate);
        const deviatedEstimate = estimate.deviatedEstimate;
        const deviation = Math.max(deviatedEstimate, originalEstimate) - Math.min(deviatedEstimate, originalEstimate);

        assert(deviation <= simulatorOptions.standardDeviation, `deviation: ${deviation}, estimate: ${deviatedEstimate}`);
    });
  });
});