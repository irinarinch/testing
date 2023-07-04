import LuhnAlgorithm from './LuhnAlgorithm';
import PaymentSystem from './PaymentSystem';

export default class Validator {
  constructor() {
    this.array = [];
  }

  checkAlgorithm(value) {
    this.array = Array.from(value, Number);
    this.algorithm = new LuhnAlgorithm(this.array);

    return this.algorithm.check();
  }

  checkSystem(value) {
    this.system = new PaymentSystem(value);

    return this.system.check();
  }
}
