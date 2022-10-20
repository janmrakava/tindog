// Remember to import the data and Dog class!
import { Dog } from "./Dog.js";
import dogs from "./data.js";

let dog = new Dog(dogs[0])

function render(){
    document.getElementById('card').innerHTML = dog.getDogHtml()
}

function getNewDoggo(){
    const nextDogData = dogs.shift()
    return nextDogData ? new Dog(nextDogData) : {}    
}
function swipe(){   
    if (dogs.length > 0){
        setTimeout(() => {
        dog = getNewDoggo()
        render()
    }, 1500)
    } else {
        lastDog()
    }
    

}
function lastDog(){
    const endMessage = dogs.length === 0 ?
        "All dogs for today": "Bro"
    setTimeout(() => {
                document.body.innerHTML = `
                <div class="end-game">                     
                    <h3>${endMessage}</h3>                    
                </div>
                `
              }, 1500)       
}
function like(){
    dog.hasBeenLiked = true
   
}

document.getElementById('reject-button').addEventListener('click', () => {
    swipe()
    document.getElementById('card').innerHTML = dog.getDogHtmlAnswer()
    
})
document.getElementById('accept-button').addEventListener('click', () => {
    swipe()
    like()
    document.getElementById('card').innerHTML = dog.getDogHtmlAnswer()
})


render()



