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



let collin= ['wow you really stink','That was refreshing!','Thought you were stronger, oh well I should have known','shite','string5','bolloks','string7','string8','string9','string10','string11','string13','string14','string15']
let energyVamp = collin[2]




//****button returns everything regardless if anything in inputted.  maybe an else/if statement? */

const  inputBox  = document.querySelector("#input_box")//selects HTML node
const  rollButton = document.querySelector("#roll_button")
        rollButton.addEventListener("click",function(){
            let userInput = inputBox.value //takes input from inputBox
            
        if(userInput<=10){
           
            for(let index =0;index<userInput;index ++){
                let rando = Math.floor(Math.random()*10)+1
                 
                  console.log(userInput)
                  console.log('the random number produced is:'+' '+ rando)
               
                 const survivalResult = document.querySelector ("#inputResult")
                 let survival= ' You survived a total of:'+' '+ rando +' '+ 'seconds!'
                 survivalResult.innerHTML = survival
                 } //end loop
            
                 let numb = Math.floor(Math.random()*10)+1
               console.log('the index number is:'+' '+numb)
           
               for (let index = numb; index < collin.length; index += 1) {
                const victimResult = collin[numb]
                console.log('victim result is ' +''+ victimResult)
                const inputResult =document.querySelector("#collinResponds")//selects HTML Node
                
                inputResult.innerHTML = victimResult 
             


            }//end for loop
           
        
        }else{
            let hey = alert (' please pick a number between 1- 10')
            return hey}
            
        

    })

        
/**var myobj = document.getElementById("demo");
myobj.remove();---(poached from W3Schools used here as reference only) */