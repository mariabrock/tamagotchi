// import utilities from '../../helpers/utilities';
import './fight.scss';
import utilities from '../../helpers/utilities';

const loadFight = () => {
  let strength = 100;
  let strengthString = '<h4>Fight</h4>';
  strengthString += `<p><progress value="${strength}" max="100" id="strengthAmt"></progress></p>`;
  strengthString += '<button id="brave" type="button">Be Brave!<i class="fa fa-hand-spock-o" aria-hidden="true"></i></button>';
  strengthString += '<button id="mean" type="button">Fight!<i class="fa fa-exclamation-triangle" aria-hidden="true"></i></button>';

  utilities.printToDom(strengthString, 'fight');
  const buddyBtn = document.getElementById('brave');
  const bullyBtn = document.getElementById('mean');

  buddyBtn.addEventListener('click', () => {
    if (strength + 1 <= 100) {
      strength += 1;
      document.getElementById('strengthAmt').value = strength;
    }
  });
  bullyBtn.addEventListener('click', () => {
    if (strength - 10 >= 0) {
      strength += -10;
      document.getElementById('strengthAmt').value = strength;
    }
  });
};

export default { loadFight };
