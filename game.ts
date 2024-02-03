class Player {
    private attackPower: number;
    private health: number;

    constructor(attackPower: number, health: number) {
        this.attackPower = attackPower;
        this.health = health;
    }

    getAttackPower(): number {
        return this.attackPower;
    }

    getHealth(): number {
        return this.health;
    }

    takeDamage(damage: number): void {
        this.health -= damage;
    }

    isAlive(): boolean {
        return this.health > 0;
    }
}

class Bot {
    private static MAX_ATTACK_POWER = 50;
    private attackPower: number;
    private health: number;

    constructor() {
        this.attackPower = Math.floor(Math.random() * (Bot.MAX_ATTACK_POWER + 1));
        this.health = 100;
    }

    getAttackPower(): number {
        return this.attackPower;
    }

    getHealth(): number {
        return this.health;
    }

    takeDamage(damage: number): void {
        this.health -= damage;
    }

    isAlive(): boolean {
        return this.health > 0;
    }
}

function startCombat() {
    const playerAttackPowerInput = document.getElementById('playerAttackPower') as HTMLInputElement;
    const playerHealthInput = document.getElementById('playerHealth') as HTMLInputElement;

    const playerAttackPower = parseInt(playerAttackPowerInput.value, 10) || 0;
    const playerHealth = parseInt(playerHealthInput.value, 10) || 0;

    const player = new Player(playerAttackPower, playerHealth);
    const bot = new Bot();

    combat(player, bot);
}

function combat(player: Player, bot: Bot): void {
    const combatResultElement = document.getElementById('combatResult') as HTMLInputElement;
    combatResultElement.innerHTML = ''; // Clear previous results

    const playerAttackPowerInput = document.getElementById('playerAttackPower') as HTMLInputElement;
    const playerHealthInput = document.getElementById('playerHealth') as HTMLInputElement;
    const startCombatButton = document.getElementById('startCombatButton') as HTMLButtonElement;

    const playerAttackPower = parseInt(playerAttackPowerInput.value, 10) || 0;
    const playerHealth = parseInt(playerHealthInput.value, 10) || 0;

    player = new Player(playerAttackPower, playerHealth);
    bot = new Bot();

    startCombatButton.disabled = true; 

    function startAttack(attacker: string, defender: string) {
        const damage = (attacker === 'Player') ? player.getAttackPower() : bot.getAttackPower();
        const defenderObj = (attacker === 'Player') ? bot : player;

        defenderObj.takeDamage(damage);

        console.log(`${attacker} attacks ${defender} with ${damage} damage. ${defender}'s health: ${defenderObj.getHealth()}`);

        combatResultElement.innerHTML += `<p>${attacker} attacks ${defender} with ${damage} damage. ${defender}'s health: ${defenderObj.getHealth()}</p>`;

        if (!defenderObj.isAlive()) {
            combatResultElement.innerHTML += `<div class="alert alert-${(attacker === 'Player') ? 'success' : 'danger'}">${attacker} wins! ${defender} is defeated.</div>`;
            startCombatButton.disabled = false;
            setTimeout(() => clearResults(), 10000);
            return;
        }

        setTimeout(() => startAttack(defender, attacker), 500);
    }

    combatResultElement.innerHTML = '<div class="alert alert-info">Combat is starting...</div>';
    setTimeout(() => startAttack('Player', 'Bot'), 1000);

}

function clearResults() {
    const combatResultElement = document.getElementById('combatResult') as HTMLInputElement;
    const startCombatButton = document.getElementById('startCombatButton') as HTMLButtonElement;
    combatResultElement.innerHTML = '';
    startCombatButton.disabled = false;
}


