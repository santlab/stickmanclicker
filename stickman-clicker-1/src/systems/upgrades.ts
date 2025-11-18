export class Upgrade {
    constructor(public name: string, public cost: number, public level: number, public multiplier: number) {}

    upgrade() {
        if (this.level < 10) {
            this.level++;
            this.cost = Math.floor(this.cost * 1.5); // Increase cost for next level
        }
    }
}

export class Equipment {
    constructor(public type: string, public material: string, public level: number, public multiplier: number) {}

    upgrade() {
        if (this.level < 10) {
            this.level++;
            this.multiplier = this.calculateMultiplier();
        }
    }

    private calculateMultiplier() {
        const multipliers = {
            bronze: 1,
            iron: 2,
            gold: 3,
            diamond: 5
        };
        return multipliers[this.material] || 1;
    }
}

export class UpgradeSystem {
    private upgrades: Upgrade[] = [];
    private equipment: Equipment[] = [];

    constructor() {
        this.initializeUpgrades();
        this.initializeEquipment();
    }

    private initializeUpgrades() {
        this.upgrades.push(new Upgrade("Auto Clicker", 2000, 0, 1));
        // Add more upgrades as needed
    }

    private initializeEquipment() {
        const materials = ["bronze", "iron", "gold", "diamond"];
        const types = ["sword", "boots", "helmet", "chestplate", "pants"];
        
        for (const material of materials) {
            for (const type of types) {
                this.equipment.push(new Equipment(type, material, 0, this.calculateMultiplier(material)));
            }
        }
    }

    private calculateMultiplier(material: string) {
        const multipliers = {
            bronze: 1,
            iron: 2,
            gold: 3,
            diamond: 5
        };
        return multipliers[material] || 1;
    }

    public getUpgrades() {
        return this.upgrades;
    }

    public getEquipment() {
        return this.equipment;
    }

    public upgradeItem(item: Upgrade | Equipment) {
        if (item instanceof Upgrade) {
            item.upgrade();
        } else if (item instanceof Equipment) {
            item.upgrade();
        }
    }
}