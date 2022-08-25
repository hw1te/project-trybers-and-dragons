import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _character1: Fighter,
    private _character2: (Fighter | SimpleFighter)[],
  ) {
    super(_character1);
    this._character1 = _character1;
    this._character2 = _character2;
  }

  fight(): number {
    this._character2.forEach((_character2) => {
      while (this._character1.lifePoints > 0
        && _character2.lifePoints > 0) {
        this._character1.attack(_character2);
        _character2.attack(this._character1);
      }
      if (this._character1.lifePoints > 0) {
        console.log('You have slain a monster.');
      } else {
        console.log('You died...');
      }
    });
    return super.fight();
  }
}