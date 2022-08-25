import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

// https://www.logicbig.com/tutorials/misc/typescript/interface-to-describe-object-with-optional-properties.html 
export default interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;

  special?(enemy: SimpleFighter): void;
  levelUp(): void;
}