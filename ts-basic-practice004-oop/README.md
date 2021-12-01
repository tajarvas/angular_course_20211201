# TypeScript OOP

## A Transformerek és az emberek között is vannak hősök.

## Kezdő lépések
- Lépj be a letöltött mappába és állítsd be a projektet:
- `cd ts-basic-practice004-oop`
- `code . -r`
- Telepítsd a függőségeket:
- `npm i`

## Feladatok
- Nyisd meg ebben a sorrendben a következő fájlokat és a kommentek alapján 
dolgozz:
1. `src/hero-interface.ts`
1. `src/hero.ts`
1. `src/transformer.ts`
1. `src/app.ts`

## Tesztelés
- Nyisd meg a terminált ebben a mappában és add ki ezt a parancsot:
- `npm test`
- Addig csináld, amíg az összes teszt nem lesz jó.

## Segítség
> Az interface -ek esetén nem lehet értéket adni a változóknak: 
> `name: string;`  
> Ha az egyik interfész kiterjeszti a másikat:  
> `interface IProduct extends IStockItem`
> Ha egy osztály megvalósít egy interface -t:
> `class Porduct implements IProduct`
> Ha egy osztály kiterjeszt egy másik osztályt:
> `class Furniture extends Product`
>  
> Megjegyzés: az iterface nevét általában I betűvel kezdjük.
> Megjegyzés: a class és az interface neve mindig nagy betűvel kezdődik.
