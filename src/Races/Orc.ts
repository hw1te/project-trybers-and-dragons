import Race from './Race';

export default class Orcs extends Race {
  private _maxLifePoints: number;
  private static numberOfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orcs.numberOfInstances += 1;
    this._maxLifePoints = 74;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Orcs.numberOfInstances;
  }
}