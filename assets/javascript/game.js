
function Fighter(name, movie, hp, attackPower, counterAttackPower) {
    this.name = name;
    this.movie = movie;
    this.hp = hp;
    this.attackPower = attackPower;
    this.counterAttackPower = counterAttackPower;
    } //End Character object constructor


//All fighters defined as objects

var jacob = new Fighter("Jacob Black", "Twilight Series", 100, 5, 5);
var lupin = new Fighter("Professor Remus Lupin", "Harry Potter Series", 120, 8, 8);
var larry = new Fighter("Larry \"The Wolf Man\" Talbot", "The Wolf Man (1941)", 150, 20, 20);
var david = new Fighter("David Kessler", "An American Werewolf in London", 180, 25, 25);

$("document").ready(function() {

    var currentPlayer;
    var currentDefender;

//Player Selector
//CAUTION: WET. Find a selector that will insert whatever's clicked.
    console.log("currentPlayer before: " + currentPlayer);

//JACOB Click Event

    $("div[id=jacob-div][class=fighter-status-div]").on("click", function (event) {
        
        var toBeEnemies = $("div[class^=fighter]").not(this);
        console.log(toBeEnemies);
        toBeEnemies.removeClass("fighter-status-div").addClass("enemy-status-div");
        $("#enemy-section-div").append(toBeEnemies);
        $("div[class=fighter-status-div]").removeClass("fighter-status-div").addClass("player-status-div");        
        
        //If the player:
        $("div[id=jacob-div][class=player-status-div]").on("mouseleave", function () {

            $("#jacob-div").css("border", "6px solid blue");
            currentPlayer = jacob;
            console.log("The current player is: " + currentPlayer.name);

        }); //End player nested click function

        //If an ememy:
        $("div[id=jacob-div][class=enemy-status-div]").on("click", function () {
            
           if ( $("#defender-section-div").children("div").length == 0 ) {
            var toBeDefender = $("#jacob-div");
            currentDefender = jacob;
            console.log("The current defender is: " + currentDefender.name);
            $("#defender-section-div").append(toBeDefender);
            $(toBeDefender).removeClass("enemy-status-div").addClass("defender-status-div");
           }

        }); //End enemy nested click function
        
    }); //End Jacob Click event

    //$(“#example”).children().css(“border”);

//LUPIN Click Event
    
    $("div[id=lupin-div][class=fighter-status-div]").on("click", function (event) {

        var toBeEnemies = $("div[class^=fighter]").not(this);
        console.log("toBeEnemies: " + toBeEnemies);
        toBeEnemies.removeClass("fighter-status-div").addClass("enemy-status-div");
        $("#enemy-section-div").append(toBeEnemies);
        $("div[class=fighter-status-div]").removeClass("fighter-status-div").addClass("player-status-div");                
        
        //If the player

        $("div[id=lupin-div][class=player-status-div]").on("mouseleave", function () {

            $("#lupin-div").css("border", "6px solid blue");
            currentPlayer = lupin;
            console.log("The current player is: " + lupin.name);
        });

        //If an ememy:

        $("div[id=lupin-div][class=enemy-status-div]").on("click", function () {
            
           if ( $("#defender-section-div").children("div").length == 0 ) {
            var toBeDefender = $("#lupin-div");
            currentDefender = lupin;
            console.log("The current defender is: " + currentDefender.name);
            $("#defender-section-div").append(toBeDefender);
            $(toBeDefender).removeClass("enemy-status-div").addClass("defender-status-div");
           }

        }); //End enemy nested click function


    }); //End Lupin click event



//LARRY (WOLFMAN) Click Event

    $("div[id=larry-div][class=fighter-status-div]").on("click", function (event) {
        var toBeEnemies = $("div[class^=fighter]").not(this);
        console.log("toBeEnemies: " + toBeEnemies);
        toBeEnemies.removeClass("fighter-status-div").addClass("enemy-status-div");
        $("#enemy-section-div").append(toBeEnemies);
        $("div[class=fighter-status-div]").removeClass("fighter-status-div").addClass("player-status-div");                
       
    //If the player:

    $("div[id=larry-div][class=player-status-div]").on("mouseleave", function () {

        $("#larry-div").css("border", "6px solid blue");
        currentPlayer = larry;
        console.log("The current player is: " + larry.name);
    }); //End player nested click function

    //If an ememy:

    $("div[id=larry-div][class=enemy-status-div]").on("click", function () {
        
       if ( $("#defender-section-div").children("div").length == 0 ) {
        var toBeDefender = $("#larry-div");
        currentDefender = larry;
        console.log("The current defender is: " + currentDefender.name);
        $("#defender-section-div").append(toBeDefender);
        $(toBeDefender).removeClass("enemy-status-div").addClass("defender-status-div");
       }

    }); //End enemy nested click function
        
    }); //End Larry (Wolfman) click event



//DAVID (AMERICAN) Click Event

    $("div[id=david-div][class=fighter-status-div]").on("click", function (event) {
        var toBeEnemies = $("div[class^=fighter]").not(this);
        console.log(toBeEnemies);
        toBeEnemies.removeClass("fighter-status-div").addClass("enemy-status-div");
        $("#enemy-section-div").append(toBeEnemies);
        $("div[class=fighter-status-div]").removeClass("fighter-status-div").addClass("player-status-div");                
        
        //If the player:

        $("div[id=david-div][class=player-status-div]").on("mouseleave", function () {
            
            $("#david-div").css("border", "6px solid blue");
            currentPlayer = david;
            console.log("The current player is: " + david.name);
        });

        //If an ememy:

        $("div[id=david-div][class=enemy-status-div]").on("click", function () {
            
           if ( $("#defender-section-div").children("div").length == 0 ) {
            var toBeDefender = $("#david-div");
            currentDefender = david;
            console.log("The current defender is: " + currentDefender.name);
            $("#defender-section-div").append(toBeDefender);
            $(toBeDefender).removeClass("enemy-status-div").addClass("defender-status-div");
           } 

        }); //End enemy nested click function
          
    }); //End david click event
 
//ATTACK button function

    $("#attack-button").on("click", function() {
        
        if($("#defender-section-div").children("div").length > 0) {

        //Calculate attack power

        currentDefender.hp -= currentPlayer.attackPower;    
        currentPlayer.attackPower+= currentPlayer.counterAttackPower;
        currentPlayer.hp -= currentDefender.counterAttackPower;
        
        //Display HP Remaining

        $(".player-status-div p[class=bottom-info]").text(currentPlayer.hp);
        $(".defender-status-div p[class=bottom-info]").text(currentDefender.hp);
    
        $("#defender-info").html("<p> You attacked " + currentDefender.name + " for " + currentPlayer.attackPower + " damage.</p><p> " + currentDefender.name + " attacked you back for " + currentDefender.attackPower + " damage.")
        

        } else{
            $("#defender-info").html("<p>Woah, heel! You can't attack without choosing a player and defender.") 
        };


    //If you're still alive on this round but your enemy's dead...

        //If you won against the current enemy but have more enemies to fight...
        if (currentDefender.hp <= 0 /*&& $("enemy-section-div").children("div").length > 0*/) {
            $(".defender-status-div").remove();
            console.log("You're dead!");
            //$(“#example p.a, #example p.b”).remove();
            //Choose the next fighter.

        //If you won against the current enemy and have no more enemies to fight...
        } else if (currentDefender.hp <= 0 && $("enemy-section-div").children("div").length == 0 ) {

            //You won! Reveal restart button.
        } 
        
    //If you're dead on this round... 

        if (currentPlayer.hp <= 0) {
            //You lose! Reveal restart button.
        };


    })//End attack button function


}); //End document.ready




/*

Theme: Movie Werewolves
Players: 
    Jacob Black (Twilight Series)
    David Kessler ( An American Werewolf in London )
    Larry Talbot (The Wolf Man (1941))
    Remus Lupin (Harry Potter Series)

//Pseudo Code

1) Set up a "start mode" for the game
    a) Display all characters on the screen with name, picture, and hp in one div
        i) Div should have a green border
    b) Have the screen prompt "Your Character" below all player pictures
    c) Further down, should show "Enemies Available to Attack," "Fight Section," an "Attack" button, and "Defender", but all empty
        ii) If "Attack" button is pressed, a message should pop up stating, "First, choose a character and defender."
    d) Should display background image and title of your game* 

2) 


*Bells and whistles. Do this step only after you finish everything else.


*/
