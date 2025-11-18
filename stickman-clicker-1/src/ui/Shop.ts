export class Shop {
    private coins: number;
    private upgrades: { [key: string]: { level: number; cost: number; multiplier: number } };
    private autoClickerCost: number;

    constructor(initialCoins: number) {
        this.coins = initialCoins;
        this.upgrades = {
            sword: { level: 0, cost: 100, multiplier: 1 },
            boots: { level: 0, cost: 150, multiplier: 2 },
            helmet: { level: 0, cost: 200, multiplier: 3 },
            chestplate: { level: 0, cost: 250, multiplier: 4 },
            pants: { level: 0, cost: 300, multiplier: 5 },
        };
        this.autoClickerCost = 2000;
    }

    public getCoins(): number {
        return this.coins;
    }

    public buyUpgrade(item: string): boolean {
        if (this.upgrades[item] && this.coins >= this.upgrades[item].cost) {
            this.coins -= this.upgrades[item].cost;
            this.upgrades[item].level++;
            this.upgrades[item].cost = Math.floor(this.upgrades[item].cost * 1.5); // Increase cost for next level
            return true;
        }
        return false;
    }

    public buyAutoClicker(): boolean {
        if (this.coins >= this.autoClickerCost) {
            this.coins -= this.autoClickerCost;
            this.autoClickerCost *= 2; // Increase cost for next auto clicker
            return true;
        }
        return false;
    }

    public getUpgradeInfo(item: string) {
        return this.upgrades[item] || null;
    }

    public getAvailableUpgrades(): string[] {
        return Object.keys(this.upgrades).filter(item => this.coins >= this.upgrades[item].cost);
    }
}