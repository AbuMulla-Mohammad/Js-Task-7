const button = document.querySelectorAll("button");
console.log(button);
const increment = (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
    const parentCard = event.target.closest("div");
    const spanToChange = parentCard.children.item(1);
    const number = +spanToChange.textContent;
    spanToChange.innerHTML =number+1;
}
for (let i = 0; i < button.length; i++){
    button[i].addEventListener("click", increment);
}

// const button = document.querySelectorAll("button");
// function increment() {
//     const parent = this.closest("div");
//     const spanToChange = parent.children.item(1);
//     const number = +spanToChange.textContent;
//     spanToChange.innerHTML =number+1;
// }
// for (let i = 0; i < button.length; i++){
//     button[i].onclick=increment;
// }

// ---------------- this vs event.target
// event.target: Refers to the element that initiated the event.
/* this:
    in regular function :it will refer to the button if i used an onclick function or eventlistener.
    in arrow function :it inherit this from the enclosing lexical context ,ex:
    const car = {
    name: "bm",
    model: 2022,
    owner: {
        fullName: ()=>{
            return this;
        }
    },
    p: function(){
    }

}
console.log(car.owner.fullName());//window
*/

