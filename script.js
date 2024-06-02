const color= document.getElementById("color");
const body= document.querySelector("body");
const button = document.querySelector(".button");


let getColor= () => {
    let hex= '#';
    const digits= "0123456789ABCDEF";
    for(let i=0; i<6; i++){
        hex+= digits[Math.floor(Math.random()*16)]
    }
    return hex;
} 



button.addEventListener("click", function(e){
    body.style.backgroundColor = getColor();
    color.innerHTML= getColor();
})




