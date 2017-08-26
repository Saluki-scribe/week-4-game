console.log("Hello world in javaScript!");

function Character(name, hp, attackPower, status, attack, increaseAttack) {
    this.name = name;
    this.hp = hp;
    this.status = status;
    this.attack = attack(){
        
        if(this.status == "defender"){
            //decrease defender status by current attack amount
            //remember it needs to be an on click trigger
    };

    this.increaseAttack = increaseAttack(){
        
        if(/*Player attacked enemy || enemy attacked player*/){
        return 10 + this.attack;
        }
    };
} //End Character object constructor

var name = new Character()

