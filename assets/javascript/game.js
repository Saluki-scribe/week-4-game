
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

var jacob = new Fighter("Jacob Black", "Twilight Series", 100, 5);
var lupin = new Fighter("Professor Remus Lupin", "Harry Potter Series", 120, 10);
var larry = new Fighter("Larry \"The Wolf Man\" Talbot", "The Wolf Man (1941)", 150, 15);
var david = new Fighter("David Kessler", "An American Werewolf in London", 180, 20);

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
 


    $("#attack-button").on("click", function() {
        if($("#enemy-section-div").children("div").length > 0 && $("#defender-section-div").children("div").length > 0) {
            console.log("We can attack now!");
        } else{
            console.log("We can't attack yet.");
        }

        
    })


//DEFENDER Section Code
//CAUTION: WET

    if (currentPlayer == undefined) {

    }




//$(“p[id^=para][lang*=en-]”).css

/*on("click", function () {
    var toBeDefender = $(this);
    console.log("Defender is " + toBeDefender);
    toBeDefender.removeClass("enemy-status-div").addClass("defender-status-div");
    $("#defender-section-div").append(toBeDefender);
    
    console.log(currentPlayer);
    
});*/
















//Defender Selector
//DRY OUT CODE if you have time. Find a selector that will insert whatever's clicked.
    









//$(".enemy-status-div").on("click", function () {

 //   console.log("The enemy function works.");
//})



 });//End document.ready




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
