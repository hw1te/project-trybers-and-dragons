import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _special: number;
  private _cost: number;
  constructor(
    private _name: string,
  ) {
    this._name = _name;
    this._special = 0;
    this._cost = 0;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstaces(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}