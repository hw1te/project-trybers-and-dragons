import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  static _instances = 0;
  _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    Warrior._instances += 1;
    this._energyType = 'stamina';
  }

  get name(): string {
    return this.name;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}