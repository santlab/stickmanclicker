import { Game } from './game';
import { HUD } from './ui/HUD';
import { Shop } from './ui/Shop';
import { Stickman } from './entities/Stickman';
import { Coin } from './entities/Coin';
import { Clicker } from './systems/clicker';
import { Upgrades } from './systems/upgrades';
import { Scenery } from './systems/scenery';
import { Autosave } from './systems/autosave';

const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const stickman = new Stickman();
const coin = new Coin();
const hud = new HUD();
const shop = new Shop();

let game = new Game(stickman, coin, hud, shop);

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.render(ctx);
    requestAnimationFrame(gameLoop);
}

function setupEventListeners() {
    canvas.addEventListener('click', () => {
        Clicker.handleClick(stickman, coin, hud);
    });

    document.getElementById('upgradeButton')?.addEventListener('click', () => {
        Upgrades.openShop(shop, coin);
    });
}

function init() {
    setupEventListeners();
    gameLoop();
}

window.onload = init;