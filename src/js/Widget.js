import swal from 'sweetalert';

export default class Widget {
  constructor(validator) {
    this.validator = validator;

    this.input = document.querySelector('.input');
    this.btn = document.querySelector('.btn');
    this.images = document.querySelectorAll('.images');
    this.statusBox = document.querySelector('.status-box');
  }

  init() {
    this.input.addEventListener('input', this.onInput.bind(this));
    this.btn.addEventListener('click', this.onClick.bind(this));
  }

  onInput() {
    this.input.value = this.input.value.replace(/[^0-9]/g, '');

    this.system = this.validator.checkSystem(this.input.value);
    this.controlCardVisibility();
    this.removeCheckStatus();
  }

  onClick(e) {
    e.preventDefault();

    if (this.input.value === '') {
      swal('Введите номер карты');
    }

    this.status = this.validator.checkAlgorithm(this.input.value);

    this.input.value = '';

    this.controlCardVisibility();
    this.showCheckStatus();
  }

  controlCardVisibility() {
    this.images.forEach((img) => {
      if (!img.classList.contains(this.system)) {
        img.classList.add('transparent');
      } else {
        img.classList.remove('transparent');
      }

      if (this.input.value === '') {
        img.classList.remove('transparent');
      }
    });
  }

  createElement() {
    const img = document.createElement('img');
    img.classList.add('check-status');

    if (this.status) {
      img.src = 'https://img.freepik.com/premium-vector/green-check-mark-illustration_645153-10.jpg';
      this.statusBox.classList.add('valid');
    } else {
      img.src = 'https://free-png.ru/wp-content/uploads/2022/01/free-png.ru-388-340x257.png';
      this.statusBox.classList.add('invalid');
    }

    return img;
  }

  showCheckStatus() {
    const img = this.createElement();

    this.removeCheckStatus();
    this.statusBox.appendChild(img);
  }

  removeCheckStatus() {
    this.checkStatusImg = document.querySelector('.check-status');

    if (this.checkStatusImg) {
      this.statusBox.removeChild(this.checkStatusImg);
    }
  }
}
