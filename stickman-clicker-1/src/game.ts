class Game {
    private coins: number;
    private upgrades: { [key: string]: number };
    private stickman: Stickman;
    private autoClicker: boolean;
    private autoClickerCost: number;
    private clickMultiplier: number;
    private sceneryIndex: number;
    private backgrounds: string[];

    constructor() {
        this.coins = 0;
        this.upgrades = {
            sword: 0,
            boots: 0,
            helmet: 0,
            chestplate: 0,
            pants: 0,
        };
        this.stickman = new Stickman();
        this.autoClicker = false;
        this.autoClickerCost = 2000;
        this.clickMultiplier = 1;
        this.sceneryIndex = 0;
        this.backgrounds = [
            'background1.png',
            'background2.png',
            'background3.png',
            'background4.png',
        ];
    }

    public init(): void {
        this.setupEventListeners();
        this.updateGame();
    }

    private setupEventListeners(): void {
        document.getElementById('click-area')?.addEventListener('click', () => this.handleClick());
        document.getElementById('buy-auto-clicker')?.addEventListener('click', () => this.buyAutoClicker());
    }

    private handleClick(): void {
        this.coins += this.clickMultiplier;
        this.stickman.attack();
        this.updateHUD();
    }

    private buyAutoClicker(): void {
        if (this.coins >= this.autoClickerCost) {
            this.coins -= this.autoClickerCost;
            this.autoClicker = true;
            this.startAutoClicker();
            this.updateHUD();
        }
    }

    private startAutoClicker(): void {
        setInterval(() => {
            if (this.autoClicker) {
                this.coins += this.clickMultiplier;
                this.updateHUD();
            }
        }, 1000);
    }

    private updateGame(): void {
        // Logic to update the game state, change backgrounds, etc.
        this.changeBackground();
        requestAnimationFrame(() => this.updateGame());
    }

    private changeBackground(): void {
        if (this.coins % 50 === 0) {
            this.sceneryIndex = (this.sceneryIndex + 1) % this.backgrounds.length;
            document.body.style.backgroundImage = `url(${this.backgrounds[this.sceneryIndex]})`;
        }
    }

    private updateHUD(): void {
        // Update the HUD with the current coin count and upgrades
        document.getElementById('coin-count')!.innerText = `Coins: ${this.coins}`;
    }
}

const game = new Game();
game.init();