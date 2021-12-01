export interface IHero {
    id: number;
    name: string;
    photo?: string;
}

/**
 * Hozz létre és exportálj ki egy új interfészt!
 * Ez az IHero kiterjesztése legyen.
 * Neve: IHuman
 * Deklaráld benne a következő változókat:
 * @var {string} sex
 * @var {number} age
 * @var {number} health 
 */
export interface IHuman extends IHero{
    sex: string;
    age: number;
    health: number;
}

/**
 * Hozz létre és exportálj ki egy új interfészt!
 * Ez az IHero kiterjesztése legyen.
 * Neve: ITransformer
 * Deklaráld benne a következő változókat:
 * @var {number} wings
 * @var {number} wheels
 * @var {string} clan 
 */
export interface ITransformer extends IHero {
    wings: number;
    wheels: number;
    clan: string;
}

