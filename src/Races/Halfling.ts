import Race from './Race';

export default class Halfing extends Race {
  private _maxLifePoints: number;
  private static numberOfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfing.numberOfInstances += 1;
    this._maxLifePoints = 60;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfing.numberOfInstances;
  }
}