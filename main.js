//console.log(' link successful')

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



let collin= ['string1','bumhole','string3','shite','string5','bolloks','string7','string8','string9','string10','string11','string13','string14','string15']
let energyVamp = collin[2]
//us if statment with for loop to return ranom index position for energyVamp




let allRolls= 0

const  inputBox  = document.querySelector("#input_box")//selects HTML node
const  rollButton = document.querySelector("#roll_button")
        rollButton.addEventListener("click",function(){
            let numbDice = inputBox.value //takes input from inputBox
        
            let counter= 0
            while( counter< numbDice){
                let rando = Math.floor(Math.random()*10)+1
                 allRolls += rando
                  //attempts.push(rando)
               
                 

                  const inputResult =document.querySelector("#inputResult")//selects HTML Node
                  inputResult.innerHTML = allRolls //collin[] may actually need a for loop
                  counter += 1
                  
            } //end loop
            let numb = Math.floor(Math.random()*10)+1
            console.log(numb)
            for (let index = numb; index < collin.length; index += 1) {
                const victimResult = collin[numb]
                console.log(victimResult)
            
                const inputResult =document.querySelector("#inputResult")//selects HTML Node
                inputResult.innerHTML = victimResult //collin[] may actually need a for loop
            
            }
            
            
            
        })

        

        
