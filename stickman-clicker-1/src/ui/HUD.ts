class HUD {
    constructor() {
        this.totalCoins = 0;
        this.upgrades = {
            sword: { level: 0, multiplier: 1 },
            boots: { level: 0, multiplier: 1 },
            helmet: { level: 0, multiplier: 1 },
            chestplate: { level: 0, multiplier: 1 },
            pants: { level: 0, multiplier: 1 },
        };
        this.autoClickerCost = 2000;
        this.autoClickerActive = false;
        this.autoClickerInterval = null;
        this.backgrounds = [
            'city.png',
            'green_field.png',
            'houses.png',
            'forest.png',
            'landscape.png'
        ];
        this.currentBackgroundIndex = 0;
        this.clickStreak = 0;
        this.streakEffectActive = false;
    }

    addCoins(amount) {
        this.totalCoins += amount;
        this.updateDisplay();
    }

    upgradeItem(item) {
        if (this.totalCoins >= this.getUpgradeCost(item)) {
            this.totalCoins -= this.getUpgradeCost(item);
            this.upgrades[item].level++;
            this.upgrades[item].multiplier = this.getMultiplier(this.upgrades[item].level);
            this.updateDisplay();
        }
    }

    getUpgradeCost(item) {
        return Math.pow(10, this.upgrades[item].level + 1) * 100; // Example cost formula
    }

    getMultiplier(level) {
        const multipliers = [1, 2, 3, 5];
        return multipliers[Math.min(level, multipliers.length - 1)];
    }

    activateAutoClicker() {
        if (this.totalCoins >= this.autoClickerCost) {
            this.totalCoins -= this.autoClickerCost;
            this.autoClickerActive = true;
            this.updateDisplay();
            this.startAutoClicker();
        }
    }

    startAutoClicker() {
        this.autoClickerInterval = setInterval(() => {
            this.addCoins(1); // Example coin generation
        }, 1000); // Click every second
    }

    stopAutoClicker() {
        clearInterval(this.autoClickerInterval);
        this.autoClickerActive = false;
    }

    updateDisplay() {
        // Update the HUD display with total coins and upgrades
        console.log(`Total Coins: ${this.totalCoins}`);
        console.log(`Upgrades:`, this.upgrades);
    }

    click() {
        this.addCoins(1); // Each click adds 1 coin
        this.clickStreak++;
        if (this.clickStreak >= 60 && !this.streakEffectActive) {
            this.activateStreakEffect();
        }
    }

    activateStreakEffect() {
        this.streakEffectActive = true;
        // Apply visual effect to background
        console.log("Streak effect activated!");
        setTimeout(() => {
            this.streakEffectActive = false;
            this.clickStreak = 0; // Reset streak
        }, 5000); // Effect lasts for 5 seconds
    }

    changeBackground() {
        this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgrounds.length;
        // Change the background image
        console.log(`Background changed to: ${this.backgrounds[this.currentBackgroundIndex]}`);
    }
}

export default HUD;