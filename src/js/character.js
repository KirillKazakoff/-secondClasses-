export default class Character {
    constructor(name, type) {
        const types = ['Bowman', 'Swordman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (typeof name === 'string' && name.length > 2 && name.length < 10 && types.includes(type)) {
            this.name = name;
            this.type = type;
            this.level = 1;
            this.health = 100;
            this.attack = null;
            this.defence = null; // ? or better just not mention it there?
        } else {
            throw new Error('some incorrect values were inputed');
        }
    }

    levelUp() {
        if (this.health > 0) {
            this.level += this.level;
            this.attack += (this.attack * 0.2);
            this.defence += (this.defence * 0.2);
            this.health = 100;
        } else {
            throw new Error('you can\'t promote level of dead creature');
        }
    }

    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}
