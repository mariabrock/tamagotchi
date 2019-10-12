import utilities from '../../helpers/utilities';
import './eat.scss';

const loadEat = () => {
  let fullness = 100;
  let domString = '<h4>Eat</h4>';
  domString += `<p><progress value="${fullness}" max="100" id="eatAmt"></progress></p>`;
  domString += '<button id="carrot" type="button">Carrot<i class="fa fa-carrot fa-3x"></i></button>';
  domString += '<button id="cookie" type="button">Cookie<i class="fa fa-cookie fa-3x"></i></button>';

  utilities.printToDom(domString, 'eat');
  const carrotBtn = document.getElementById('carrot');
  const cookieBtn = document.getElementById('cookie');

  carrotBtn.addEventListener('click', () => {
    if (fullness + 10 <= 100) {
      fullness += 10;
      document.getElementById('eatAmt').value = fullness;
    }
  });
  cookieBtn.addEventListener('click', () => {
    if (fullness - 3 >= 0) {
      fullness -= 3;
      document.getElementById('eatAmt').value = fullness;
    }
  });
};

export default { loadEat };
