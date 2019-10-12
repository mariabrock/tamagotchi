import utilities from '../../helpers/utilities';
import './eat.scss';

const loadEat = () => {
  let domString = '';
  domString += 'eat all the things';
  utilities.printToDom(domString, 'eat');
};

export default { loadEat };
