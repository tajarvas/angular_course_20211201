import { ITransformer } from './hero-interface';

/**
 * Hozz létre és exportálj ki egy új osztályt!
 * Ez az ITransformer interfészt implementálja.
 * Neve: TransformerHero
 * Deklaráld benne az interfész által megkövetelt változókat:
 * Definiáld a konstruktort és kérj be minden változót, majd állítsd be őket.
 */
export class TransformerHero implements ITransformer {
    id: number = 0;
    name: string = '';
    wings: number = 0;
    wheels: number = 0;
    clan: string = 'evils';

    constructor(id: number, name: string, wings: number, wheels: number, clan: string) {
        this.id = id;
        this.name = name;
        this.wings = wings;
        this.wheels = wheels;
        this.clan = clan;
    }
}
