// function getRandom(min, max) {
//     return Math.random() * (max - min) + min;
//   }
// math floor rounds to highest integer 
// Math ceil rounds to lowest integer

let color=["Red","Green","Blue","#c29d36","#206661","#521d57","#2a380c","#f0952e"];
function getColor(){
    
    let x= Math.floor(Math.random() * color.length);
    document.body.style.backgroundColor=color[x];

    // let h1=document.getElementById("hd");
    // h1.innerHTML = "BackgroundColor: " +  color[x] ;
    let span=document.getElementById("spanid")
    span.innerHTML = color[x];
}