// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transfomer";

/**
 * Hozz létre és exportálj ki egy új változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans - an array contains 3 HumanHeroes
 */
export const humans: HumanHero[] = [
    new HumanHero(1, 'Mack', 'male', 44, 100),
    new HumanHero(2, 'Joel', 'male', 44, 100),
    new HumanHero(3, 'Nicole', 'female', 44, 100),
];

/**
 * Hozz létre és exportálj ki egy új változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} humans - an array contains 3 TransformerHeroes
 */
export const transformers: TransformerHero[] = [
    new TransformerHero(4, 'Ultron', 2, 0, 'evils'),
    new TransformerHero(5, 'Magneton', 0, 4, 'goods'),
    new TransformerHero(6, 'Herotron', 0, 12, 'goods'),
];
