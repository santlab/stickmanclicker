export class Clicker {
    private totalCoins: number;
    private clickValue: number;
    private upgrades: { [key: string]: number };
    private autoClickerActive: boolean;
    private autoClickerInterval: NodeJS.Timeout | null;

    constructor() {
        this.totalCoins = 0;
        this.clickValue = 1;
        this.upgrades = {
            bronze: 1,
            iron: 2,
            gold: 3,
            diamond: 5,
        };
        this.autoClickerActive = false;
        this.autoClickerInterval = null;
    }

    public click(): void {
        this.totalCoins += this.clickValue;
        this.updateHUD();
    }

    public buyAutoClicker(): void {
        if (this.totalCoins >= 2000) {
            this.totalCoins -= 2000;
            this.autoClickerActive = true;
            this.startAutoClicker();
            this.updateHUD();
        }
    }

    private startAutoClicker(): void {
        if (this.autoClickerInterval) return;

        this.autoClickerInterval = setInterval(() => {
            this.click();
        }, 1000);
    }

    public stopAutoClicker(): void {
        if (this.autoClickerInterval) {
            clearInterval(this.autoClickerInterval);
            this.autoClickerInterval = null;
            this.autoClickerActive = false;
        }
    }

    public upgradeEquipment(type: string): void {
        if (this.upgrades[type] && this.totalCoins >= this.upgrades[type] * 100) {
            this.totalCoins -= this.upgrades[type] * 100;
            this.clickValue *= this.upgrades[type];
            this.updateHUD();
        }
    }

    private updateHUD(): void {
        // Logic to update the HUD with the current totalCoins and clickValue
    }

    public getTotalCoins(): number {
        return this.totalCoins;
    }

    public getClickValue(): number {
        return this.clickValue;
    }
}