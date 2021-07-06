import {Bowman, Swordman, Magician, Undead, Zombie, Daemon} from '../js/charTypes.js';

const successInit = {
    attack: 25,
    defence: 25,
    type: 'Bowman',
    level: 1,
    health: 100,
    name: 'Clinkz'
}

test('successful initialize', () => {
    const result = new Bowman('Clinkz', 'Bowman');

    expect(result).toEqual(successInit);   
})

test('incorrect input', () => {
    const check = () => new Bowman('whoareyoubruh', 'someType');

    expect(check).toThrow()
})



const successPromotion = {
    attack: (25 + 25 * 0.2),
    defence: (25 + 25 * 0.2),
    type: 'Bowman',
    level: 2,
    health: 100,
    name: 'Clinkz'
}

test('levelUp func success', () => {
    const result = new Bowman('Clinkz', 'Bowman');

    result.levelUp();
    expect(result).toEqual(successPromotion);
})

test('damage func check', () => {
    const result = new Bowman('Clinkz', 'Bowman');

    result.damage(10);
    expect(result.health).toBe(92.5)

    result.health = 0;
    result.damage(10000);
    expect(result.health).toBe(0);
}) //Unite tests for one func?

test('levelUp fail', () => {
    const check = () => {
        const result = new Bowman('Clinkz', 'Bowman');

        result.damage(1000);
        result.levelUp();
    }

    expect(check).toThrow();
})

