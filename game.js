var Player = /** @class */ (function () {
    function Player(attackPower, health) {
        this.attackPower = attackPower;
        this.health = health;
    }
    Player.prototype.getAttackPower = function () {
        return this.attackPower;
    };
    Player.prototype.getHealth = function () {
        return this.health;
    };
    Player.prototype.takeDamage = function (damage) {
        this.health -= damage;
    };
    Player.prototype.isAlive = function () {
        return this.health > 0;
    };
    return Player;
}());
var Bot = /** @class */ (function () {
    function Bot() {
        this.attackPower = Math.floor(Math.random() * (Bot.MAX_ATTACK_POWER + 1));
        this.health = 100;
    }
    Bot.prototype.getAttackPower = function () {
        return this.attackPower;
    };
    Bot.prototype.getHealth = function () {
        return this.health;
    };
    Bot.prototype.takeDamage = function (damage) {
        this.health -= damage;
    };
    Bot.prototype.isAlive = function () {
        return this.health > 0;
    };
    Bot.MAX_ATTACK_POWER = 50;
    return Bot;
}());
function startCombat() {
    var playerAttackPowerInput = document.getElementById('playerAttackPower');
    var playerHealthInput = document.getElementById('playerHealth');
    var playerAttackPower = parseInt(playerAttackPowerInput.value, 10) || 0;
    var playerHealth = parseInt(playerHealthInput.value, 10) || 0;
    var player = new Player(playerAttackPower, playerHealth);
    var bot = new Bot();
    combat(player, bot);
}
function combat(player, bot) {
    var combatResultElement = document.getElementById('combatResult');
    combatResultElement.innerHTML = ''; // Clear previous results
    var playerAttackPowerInput = document.getElementById('playerAttackPower');
    var playerHealthInput = document.getElementById('playerHealth');
    var startCombatButton = document.getElementById('startCombatButton');
    var playerAttackPower = parseInt(playerAttackPowerInput.value, 10) || 0;
    var playerHealth = parseInt(playerHealthInput.value, 10) || 0;
    player = new Player(playerAttackPower, playerHealth);
    bot = new Bot();
    startCombatButton.disabled = true;
    function startAttack(attacker, defender) {
        var damage = (attacker === 'Player') ? player.getAttackPower() : bot.getAttackPower();
        var defenderObj = (attacker === 'Player') ? bot : player;
        defenderObj.takeDamage(damage);
        console.log("".concat(attacker, " attacks ").concat(defender, " with ").concat(damage, " damage. ").concat(defender, "'s health: ").concat(defenderObj.getHealth()));
        combatResultElement.innerHTML += "<p>".concat(attacker, " attacks ").concat(defender, " with ").concat(damage, " damage. ").concat(defender, "'s health: ").concat(defenderObj.getHealth(), "</p>");
        if (!defenderObj.isAlive()) {
            combatResultElement.innerHTML += "<div class=\"alert alert-".concat((attacker === 'Player') ? 'success' : 'danger', "\">").concat(attacker, " wins! ").concat(defender, " is defeated.</div>");
            startCombatButton.disabled = false;
            setTimeout(function () { return clearResults(); }, 10000);
            return;
        }
        setTimeout(function () { return startAttack(defender, attacker); }, 500);
    }
    combatResultElement.innerHTML = '<div class="alert alert-info">Combat is starting...</div>';
    setTimeout(function () { return startAttack('Player', 'Bot'); }, 1000);
}
function clearResults() {
    var combatResultElement = document.getElementById('combatResult');
    var startCombatButton = document.getElementById('startCombatButton');
    combatResultElement.innerHTML = '';
    startCombatButton.disabled = false;
}
