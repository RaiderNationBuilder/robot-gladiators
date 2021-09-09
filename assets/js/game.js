// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots

// Game States
// "LOSE" - Player robot's health is zero or less
// console.log(enemy.names)
// console.log(playerInfo.length)
var fight = function(enemy.name) {

    while (playerHealth > 0 && enemy.health > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = Math.max(0, playerMoney - 10);
          console.log("playerMoney", playerMoney)
          break;
        }
      }
  
      // generate random damage value based on player's attack power
      var damage = randomNumber(playerAttack - 3, playerAttack);

      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );
  
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
  
      var damage = randomNumber(enemy.attack - 3, enemy.attack);

      playerHealth = Math.max(0, playerHealth - damage);
      console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerHealth + ' health left.');
      }
    }
  };

  var startGame = function() {
    //reset player stats
    playerInfo.reset();
    for(var i = 0; i < playerInfo.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiator!  Round " + (i + 1) );
            var pickedEnemyObj = enemyInfo[i]
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            
            //if were not at the last enemy in the array
            if (playerHealth > 0 && i < playerInfo.length - 1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                //if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
                
            }

        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }  
    }
     endGame(); 
};
    //function to end the entire game
    var endGame = function() {
        window.alert("The game has now ended. Let's see how you did!");
        // if the player is still alive, player wins!
        if (playerHealth > 0){
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + '.');
        }
        else {
            window.alert("You've lost your robot in battle.");
        }
    var playAgainConfirm = window.confirm("Would you like to play again?");
        if (playAgainConfirm) {
            //restart the game
            startGame();
        }else {
         window.alert("Thanks you for playing Robot Gladiators! Come back soon!");
        }
    };
    var shop = function() {
        // ask player what they'd like to do
        var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
        //use switch to carry out action
        switch (shopOptionPrompt) {
            case "REFILL":
            case "refill":
            playerInfo.refillHealth();
            break;
            case "UPGRADE":
            case "upgrade":
            playerInfo.upgradeAttack();
            break;
        }
    }

    var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);

        return value;
    };

    var playerInfo = {
        name: window.prompt("What is your robot's name"),
        playerHealth = 0,
        playerAttack = 1,
        playerMoney = 10,
        reset: function() {
            this.health = 100;
            this.money = 10;
            this.attack = 10;
        },
        refillHealth: function() {
            if (this.money >= 7) {
              window.alert("Refilling player's health by 20 for 7 dollars.");
              this.health += 20;
              this.money -= 7;
            } 
            else {
              window.alert("You don't have enough money!");
            }
          },
          upgradeAttack: function() {
            if (this.money >= 7) {
              window.alert("Upgrading player's attack by 6 for 7 dollars.");
              this.attack += 6;
              this.money -= 7;
            } 
            else {
              window.alert("You don't have enough money!");
            }
          }
    };
    // console.log(playerInfo.name, playerAttack, palyerHealth);
    var enemyInfo = [
        {
            name: "Roborto", 
            attack: randomNumber(10, 14)
        },
        {
            name: "Amy Android",
            attack: randomNumber(10, 14)
        },
        {
            name:  "Robo Trumble",
            attack: randomNumber(10, 14)
        }
    ];
    
// run fight function to start game
startGame();