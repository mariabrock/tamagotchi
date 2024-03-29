import utilities from '../../helpers/utilities';
import './sleep.scss';

const loadSleep = () => {
  let energyString = '<h1>Energy</h1>';
  let energy = 50;
  energyString += `<p><progress value="${energy}" max="100" id="sleepAmt"></progress></p>`;
  energyString += '<button id="nap" type="button">Nap<i class="fa fa-cat fa-2x"></i></button>';
  energyString += '<button id="deepsleep" type="button">Sleep<i class="fa fa-bed fa-2x" aria-hidden="true"></i></button>';
  utilities.printToDom(energyString, 'sleep');
  const napBtn = document.getElementById('nap');
  const sleepBtn = document.getElementById('deepsleep');

  napBtn.addEventListener('click', () => {
    if (energy + 50 <= 100) {
      energy += 50;
      document.getElementById('sleepAmt').value = energy;
    }
  });
  sleepBtn.addEventListener('click', () => {
    if (energy + 60 >= 99) {
      energy += 60;
      document.getElementById('sleepAmt').value = energy;
    }
  });
};

export default { loadSleep };
