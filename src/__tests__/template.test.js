import Bowman from '../js/bowman';

const successInit = {
    attack: 25,
    defence: 25,
    type: 'Bowman',
    level: 1,
    health: 100,
    name: 'Clinkz',
};

test('successful initialize', () => {
    const result = new Bowman('Clinkz', 'Bowman');
    expect(result).toEqual(successInit);
});

test('too long name inputed', () => {
    const check = () => new Bowman('toobignameforit');
    expect(check).toThrow('too long name inputed');
});

test('too short name inputed', () => {
    const check = () => new Bowman('t');
    expect(check).toThrow('too short name inputed');
});

test('incorrect value input', () => {
    const check = () => new Bowman(1);
    expect(check).toThrow('incorrect value input');
});

const successPromotion = {
    attack: (25 + 25 * 0.2),
    defence: (25 + 25 * 0.2),
    type: 'Bowman',
    level: 2,
    health: 100,
    name: 'Clinkz',
};

test('levelUp func success', () => {
    const result = new Bowman('Clinkz', 'Bowman');

    result.levelUp();
    expect(result).toEqual(successPromotion);
});

test('damage func check', () => {
    const result = new Bowman('Clinkz', 'Bowman');

    result.damage(10);
    expect(result.health).toBe(92.5);

    result.health = 0;
    result.damage(10000);
    expect(result.health).toBe(0);
});

test('levelUp fail', () => {
    const check = () => {
        const result = new Bowman('Clinkz', 'Bowman');

        result.damage(1000);
        result.levelUp();
    };

    expect(check).toThrow();
});
