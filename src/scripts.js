
    const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
    const planetEl = document.getElementById("planets")
    console.log(planets)
    planets.forEach((planet) =>{
       DOMcomponent=
       `<div>
       <h1> ${planet}</h1>
       </div>
       `
       console.log(DOMcomponent)
       planetEl.innerHTML += DOMcomponent
    })

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
// const planetEl = document.getElementById("planets")
let newArray= planets.map(function(x){
    return x.charAt(0).toUpperCase()+ x.slice(1)
})
console.log(newArray)
planetEl.innerHTML += newArray

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const withE= planets.filter(planet => planet.includes("e"))
console.log(withE)
planetEl.innerHTML += withE
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
let words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]
let wordlength=words.length

words = words.reduce((previousword,currentword)=>
`${previousword} ${currentword}`
)
console.log(words)
// Use the reduce method to create a sentence from the words in the following array