import each from 'jest-each';
import Validator from '../Validator';
import Widget from '../Widget';

each([
  ['371449635398431', true],
  ['30569309025904', true],
  ['6011111111111117', true],
  ['3530111333300000', true],
  ['5555555555554444', true],
  ['4111111111111111', true],
  ['0000054212', false],
  ['1400dfg0', false],
  ['rrrrrrsh dfg', false],
]).test('if value: %s, card is valid: %s', (value, result) => {
  document.body.innerHTML = `  
    <form class="validate-widget">
      <div class="images-container"></div>
      <div class="form">            
        <input class="input" type="text">
        <button class="btn">Click to Validate</button>
      </div> 
      <div class="status-box">
        <span class="message">Luhn Algorithm Check</span>     
      </div>          
    </form>
  `;
  const validator = new Validator();
  const widget = new Widget(validator);
  widget.init();

  widget.input.value = value;
  widget.btn.click();

  expect(widget.statusBox.classList.contains('valid')).toBe(result);
});
