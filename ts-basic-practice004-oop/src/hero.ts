import { IHuman } from './hero-interface';

/**
 * Hozz létre és exportálj ki egy új osztályt!
 * Ez az IHuman interfészt implementálja.
 * Neve: HumanHero
 * Deklaráld benne az interfész által megkövetelt változókat:
 * Definiáld a konstruktort és kérj be minden változót, majd állítsd be őket.
 */
export class HumanHero implements IHuman {
    id: number = 0;
    name: string = '';
    sex: string = 'male';
    age: number = 0;
    health: number = 0;

    constructor(id: number, name: string, sex: string, age: number, health: number) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.health = health;
    }
}
