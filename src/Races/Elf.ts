import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static numberOfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.numberOfInstances += 1;
    this._maxLifePoints = 99;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Elf.numberOfInstances;
  }
}