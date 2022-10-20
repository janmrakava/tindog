// Create the Dog class here
class Dog{
    constructor(data){
        Object.assign(this,data)        
    }
    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class="feature-suggestion">
                <div class="dog-info">
                    <h4 class="name-age"> ${name}, ${age} </h4>
                    <div class="dog-bio">
                        ${bio}
                    </div>
                </div>
                <img class="dog-img" src="${avatar}">
            </div>`
    }
    getDogHtmlAnswer() {
        const { name, avatar, age, bio } = this
        if (this.hasBeenLiked){
            return `
            <div class="feature-suggestion">
                <div class="dog-info">
                <img class="dog-img" src="images/badge-like.png">
                    <h4 class="name-age"> ${name}, ${age} </h4>
                    <div class="dog-bio">
                        ${bio}
                    </div>
                </div>
                <img class="dog-img" src="${avatar}">
            </div>`
        } else {
            return `
            <div class="feature-suggestion">
                <div class="dog-info">
                <img class="dog-img" src="images/badge-nope.png">
                    <h4 class="name-age"> ${name}, ${age} </h4>
                    <div class="dog-bio">
                        ${bio}
                    </div>
                </div>
                <img class="dog-img" src="${avatar}">
            </div>`
        }
        
    }

 
}


export {Dog}