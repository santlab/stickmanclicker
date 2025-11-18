# Stickman Clicker Game

## Overview
Stickman Clicker is an engaging offline clicker game where players collect coins by clicking on a stickman character. Players can spend their collected coins on upgrades and equipment to enhance their gameplay experience. The game features various backgrounds that change as players progress through levels.

## Features
- Click to earn coins.
- Upgrades for stickman and equipment (sword, boots, helmet, chestplate, and pants).
- Multiple materials for upgrades: Bronze, Iron, Gold, and Diamond.
- Auto-click feature for passive coin collection.
- Stickman animations based on equipped items.
- Dynamic backgrounds that change every 50 and 100 levels.
- Special effects for continuous clicking.

## Project Structure
```
stickman-clicker
├── public
│   └── index.html
├── src
│   ├── main.ts
│   ├── game.ts
│   ├── styles
│   │   └── main.css
│   ├── entities
│   │   ├── Stickman.ts
│   │   └── Coin.ts
│   ├── ui
│   │   ├── HUD.ts
│   │   └── Shop.ts
│   ├── systems
│   │   ├── clicker.ts
│   │   ├── upgrades.ts
│   │   ├── scenery.ts
│   │   └── autosave.ts
│   └── assets
│       ├── sprites.svg
│       └── sounds
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd stickman-clicker
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Game
To start the game, run:
```
npm run dev
```
Then open your browser and navigate to `http://localhost:3000` (or the specified port).

## How to Play
- Click on the stickman to collect coins.
- Use the coins to purchase upgrades and improve your stickman's abilities.
- Keep clicking to maintain your coin collection and unlock special effects.
- Enjoy the changing backgrounds as you progress through levels!

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
