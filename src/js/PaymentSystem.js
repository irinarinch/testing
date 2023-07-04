export default class PaymentSystem {
  constructor(value) {
    this.string = value.substring(0, 2);
    this.systems = {
      mir: [2],
      dinersClub: [30, 36, 38],
      jcb: [31, 35],
      americanExpress: [34, 37],
      visa: [4],
      masterCard: [51, 52, 53, 54, 55],
      maestro: [50, 56, 57, 58, 63, 67],
      discover: [60],
    };
  }

  getValue(str) {
    Object.values(this.systems).forEach((arr) => {
      if (arr.includes(Number(str[0])) || arr.includes(Number(str))) {
        this.value = arr;
      }
    });
  }

  getProperty(array) {
    Object.entries(this.systems).forEach((arr) => {
      if (arr.includes(array)) {
        const [property] = arr;
        this.property = property;
      }
    });
  }

  check() {
    this.getValue(this.string);
    this.getProperty(this.value);

    return this.property;
  }
}
