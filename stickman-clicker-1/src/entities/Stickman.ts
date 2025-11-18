class Stickman {
    constructor() {
        this.position = { x: 100, y: 100 };
        this.health = 100;
        this.attackPower = 1;
        this.equippedWeapon = null;
    }

    equipWeapon(weapon) {
        this.equippedWeapon = weapon;
        this.attackPower = weapon.multiplier;
    }

    attack() {
        if (this.equippedWeapon) {
            // Logic for attack animation
            console.log(`Stickman attacks with ${this.equippedWeapon.name} for ${this.attackPower} damage!`);
        } else {
            console.log("Stickman attacks with bare hands!");
        }
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.die();
        }
    }

    die() {
        console.log("Stickman has died.");
        // Logic for stickman death
    }

    render(context) {
        // Logic to render the stickman on the canvas
        context.fillStyle = "black";
        context.fillRect(this.position.x, this.position.y, 50, 100); // Simple rectangle for stickman
    }
}

export default Stickman;