// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
var playerName = window.prompt("What is your robot's name");
var palyerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// console.log(playerName, playerAttack, palyerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// console.log(enemyNames)
// console.log(enemyNames.length)
var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0) {
        //place fight function code block here . . .
            // Alert players that they are starting the round
        // window.alert("Welcome to Robot Gladiators!");
        var promptFight = window.prompt("Would you like to FIGHT of SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.")
        // if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //remove enemys health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );    
            //check enemy's health
            if (enemyHealth <=0) {
                window.alert(enemyName + " has died!");
            }
                else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }
                // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
                palyerHealth = palyerHealth - enemyAttack;
                // Log a resulting message to the console so we know that it worked.
                console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + palyerHealth + " health remaining.");
                //check player health
                if (palyerHealth <= 0) {
                    window.alert(playerName + " has died");
                } else {
                    window.alert(playerName + " still has " + palyerHealth + " health left");
                }
        //if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money form player for skipping
                playerMoney = playerMoney - 2;
            }
            //if no (false), ask question again by running fight() again        
            else {
                fight();
        }
            // if player did not chose 1 or 2 in prompt
        } else {
            window.alert("You need to pick a valid option. Try again!");
        }
    }    
};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50
    fight(pickedEnemyName);
}
// run fight function to start game
// fight();