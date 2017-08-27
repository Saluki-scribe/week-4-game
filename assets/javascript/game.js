
function Fighter(name, movie, hp, attackPower, status, attack) {
    this.name = name;
    this.movie = movie;
    this.hp = hp;
    this.attackPower = attackPower;
    this.status = function() {
    //    if(/*player selects Fighter to be their character*/){
            /*return "player" as status */
    //    } else if (/*player selects Fighter to be Defender || Fighter is the only enemy left*/){
            /*return "defender" as status */
    //    } else{
            /*return "enemy" as status */
    //    }
    }
    this.attack = function() {
            
            //decrease defender or player hp by current attackPower
            //needs to be an on click trigger
            //Increase player attackPower by 8 each time event is triggered
        };

    } //End Character object constructor


//All fighters defined as objects

var jacob = new Fighter("Jacob Black", "Twilight Series", 80, 5);
var lupin = new Fighter("Professor Remus Lupin", "Harry Potter Series", 100, 10);
var larry = new Fighter("Larry \"The Wolf Man\" Talbot", "The Wolf Man (1941)", 120, 15);
var david = new Fighter("David Kessler", "An American Werewolf in London", 140, 20);

$("document").ready(function() {

    var currentPlayer;

//Player Selector
//DRY OUT CODE if you have time. Find a selector that will insert whatever's clicked.
    console.log("currentPlayer before: " + currentPlayer);



    $("#jacob-div").one("click", function () {
        var toBeEnemies = $("div[class^=fighter]").not(this);
        console.log(toBeEnemies);
        toBeEnemies.removeClass("fighter-status-div").addClass("enemy-status-div");
        $("#enemy-section-div").append(toBeEnemies);
        $(this).removeClass("fighter-status-div").addClass("player-status-div");        
        
        currentPlayer = jacob;
        console.log("currentPlayer after: " + currentPlayer);
        console.log("currentPlayer name: " + currentPlayer.name);
        
        
    });
    
    $("#lupin-div").one("click", function () {
        var toBeEnemies = $("div[class^=fighter]").not(this);
        console.log(toBeEnemies);
        toBeEnemies.removeClass("fighter-status-div").addClass("enemy-status-div");
        $("#enemy-section-div").append(toBeEnemies);
        $(this).removeClass("fighter-status-div").addClass("player-status-div");                
        
        currentPlayer = lupin;
        console.log("currentPlayer after: " + currentPlayer.name);
        

    });

    $("#larry-div").one("click", function () {
        var toBeEnemies = $("div[class^=fighter]").not(this);
        console.log(toBeEnemies);
        toBeEnemies.removeClass("fighter-status-div").addClass("enemy-status-div");
        $("#enemy-section-div").append(toBeEnemies);
        $(this).removeClass("fighter-status-div").addClass("player-status-div");                
        
        currentPlayer = larry;
        console.log("currentPlayer after: " + currentPlayer.name);
        
    });

    $("#david-div").one("click", function () {
        var toBeEnemies = $("div[class^=fighter]").not(this);
        console.log(toBeEnemies);
        toBeEnemies.removeClass("fighter-status-div").addClass("enemy-status-div");
        $("#enemy-section-div").append(toBeEnemies);
        $(this).removeClass("fighter-status-div").addClass("player-status-div");                
        
        currentPlayer = david;
        console.log("currentPlayer after: " + currentPlayer);
        console.log("currentPlayer name: " + currentPlayer.name);
        
        
    });
 

//Defender Selector
//DRY OUT CODE if you have time. Find a selector that will insert whatever's clicked.
    
$("#jacob-div").one("click", function () {
    console.log("this function works");
    /*var toBeDefender = $(this);
    console.log("Defender is " + toBeDefender);
    toBeDefender.removeClass("enemy-status-div").addClass("defender-status-div");
    $("#defender-section-div").append(toBeDefender);
    
    console.log(currentPlayer);*/
    
    
});



//$(“p[id^=para][lang*=en-]”).css


}); //End document.ready



/*

Theme: Famous Werewolves
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
