import { expect as _expect } from 'chai';
const expect = _expect;
import CheckoutModel from '../src/checkoutModel.js';

describe('CheckoutModel', () => {
  let checkoutModel;
  beforeEach(() => {
    checkoutModel = new CheckoutModel([10, 5, 2], [0, 0, 0], 10);
  });

  describe('#calculateRemaining', () => {
    const testValues = [[1, 1], [6, 6], [10, 0], [11, 1], [21, 1], [23, 3], [31, 1]];

    testValues.forEach(([amount, remaining]) => {
      it('should correctly calculate the remaining and return the updated value', () => {
        const result = checkoutModel.calculateRemaining(amount, [10, 5, 2], 0, [0, 0, 0]);
        expect(result).to.equal(remaining);
      });

      it('should update the remaining amount for subsequent calculation', () => {
        let restTest = checkoutModel.calculateRemaining(amount, [10, 5, 2], 0, [0, 0, 0]);
        expect(restTest).to.equal(remaining);
      });
    });
  });

  describe('#decrementer', () => {
    it('should correctly decrement the number of bills if greater than zero', () => {
      let nb = checkoutModel.decrementer(0, [2, 0, 0]);
      expect(nb[0]).to.equal(1);
    });

    it('should not decrement if the number of bills is already 0', () => {
      checkoutModel.decrementer(1, [0, 0, 0]);
      expect(checkoutModel.nbbillets[1]).to.equal(0);
    });
  });

  describe('#calculateAmount', () => {
    const testValues = [[1, 1], [6,1 ], [10, 0], [11, 1], [21, 1], [23, 1], [31, 1]];

    testValues.forEach(([amount, remaining]) => {
      it('should correctly calculate the remaining amount to return', () => {
        const result = checkoutModel.calculateAmount([10, 5, 2], [0, 0, 0], amount, remaining);
        expect(result).to.equal(remaining);
      });

      it('should update the remaining amount after calculation', () => {
        const amountTest = checkoutModel.calculateAmount([10, 5, 2], [0, 0, 0], amount, remaining);
        expect(amountTest).to.equal(remaining);
      });
    });
  });
});



























