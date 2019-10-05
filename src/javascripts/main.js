import '../styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';
import sleep from './components/sleep/sleep';
import fight from './components/fight/fight';

console.error('hi');

const init = () => {
  eat.loadEat();
  sleep.loadSleep();
  play.loadPlay();
  fight.loadFight();
};

init();
