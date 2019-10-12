import utilities from '../../helpers/utilities';
import './play.scss';

const loadPlay = () => {
  let playString = '<h4>Play</h4>';
  let fun = 50;
  playString += '<button id="superFun" type="button"><i class="fa fa-futbol-o" aria-hidden="true"></i></button>';
  playString += '<button id="someFun" type="button"><i class="fas fa-paint-brush fa-4x"></i></button>';
  playString += `<p><progress value="${fun}" max="100" id="playAmt"></progress></p>`;
  utilities.printToDom(playString, 'play');
  const futbolBtn = document.getElementById('superFun');
  const paintbrushBtn = document.getElementById('someFun');

  futbolBtn.addEventListener('click', () => {
    if (fun + 50 >= 100) {
      fun += 50;
      document.getElementById('playAmt').value = fun;
    }
  });
  paintbrushBtn.addEventListener('click', () => {
    if (fun + 2 >= 0) {
      fun += 2;
      document.getElementById('playAmt').value = fun;
    }
  });
};

export default { loadPlay };
