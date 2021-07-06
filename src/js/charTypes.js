/* eslint-disable max-classes-per-file */
import Character from './character';

export class Bowman extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordman extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}

export class Undead extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}

export class Daemon extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}
