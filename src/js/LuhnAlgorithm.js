export default class LuhnAlgorithm {
  constructor(array) {
    this.payload = this.getPayload(array);
  }

  getPayload(array) {
    const removed = array.splice(array.length - 1, 1);
    const [checkDigit] = removed;
    this.checkDigit = checkDigit;

    return array;
  }

  calculate() {
    const rightmostIndex = this.payload.length - 1;

    for (let index = rightmostIndex; index >= 0; index -= 1) {
      const requiredParity = rightmostIndex % 2 === index % 2;

      if (requiredParity) {
        this.payload[index] *= 2;
      }

      if (this.payload[index] > 9) {
        this.payload[index] -= 9;
      }
    }
  }

  getResult() {
    this.calculate();

    this.sum = this.payload.reduce((a, b) => a + b, 0);

    return (this.sum * 9) % 10;
  }

  check() {
    this.result = this.getResult();

    if (this.result === this.checkDigit) {
      return true;
    }

    return false;
  }
}
