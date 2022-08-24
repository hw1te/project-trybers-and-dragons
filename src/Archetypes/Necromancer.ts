import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    Necromancer._instances += 1;
    this._energyType = 'mana';
  }

  get name(): string {
    return this.name;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}