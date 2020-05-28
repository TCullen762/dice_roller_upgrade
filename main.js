console.log(' link successful')

//TODO:
//Create an empty array called attempts 
//add a click event listener for the roll button
//on click, take the value from the input box using .value and pass it into a variable
//within the event listener
//build a math.random function to return a random numnber ror each number of dice.
//build a loop, run the loop equal to the value of the input box.
//push the result of the loop into the attempts array
//add the values of the array and return the result
//using an If statement return a text result using either .innerHTML or js DOM to return
//a string " you are screwed" congrats you almost survived ect. 
//incorporate a reset button using the reset() method 
//using js DOM print a picture of colin with blue eyes?



/* NEED:
conditional logic to return cheeeky collinisms, maybe fill an array with qoutes and use a loop with math.random to return a 
collinism. Possibly use the js dowm we just learned to print a pic of him and or qoutes- that may be more fun to do
also experiment with a FOR loop for efficency?

*/



//let collin= " troll"
//let gizmo = " well it looks like you survived this time"

let allRolls= 0

const  inputBox  = document.querySelector("#input_box")//selects HTML node
const  rollButton = document.querySelector("#roll_button")
        rollButton.addEventListener("click",function(){
            let numbDice = inputBox.value //takes input from inputBox
        
            let counter= 0
            while( counter< numbDice){
                let rando = Math.floor(Math.random()*6)+1
                 allRolls += rando
                  //attempts.push(rando)
               
                  const inputResult =document.querySelector("#inputResult")//selects HTML Node
                  inputResult.innerHTML = allRolls
                  counter += 1
            } //end loop
            
            console.log(allRolls)

        })

        /*if(allRolls<=1){
           
            let engryVamp = document.querySelector("#sucksForYou")//selects HTML Node
            engryVamp.innerHTML = gizmo
            }else{
                let engryVamp = document.querySelector("#sucksForYou")//selects HTML Node
            engryVamp.innerHTML = collin
            }
        */