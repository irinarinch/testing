import Widget from './Widget';
import Validator from './Validator';

const validator = new Validator();
const widget = new Widget(validator);

widget.init();
