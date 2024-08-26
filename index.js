let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let restartBtn =document.getElementById("restart");
let newBtn =document.getElementById("new-game");
let message =document.getElementById("message");


let winningPattern = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],
];

let xTurn = true;
let count = 0;

const disableButtons = () =>{
    btnRef.forEach((element) => (element.disabled = true));

    popupRef.classList.remove("hide");

}
//new game 

newBtn.addEventListener("click", ()=>{
    popupRef.classList.add("hide");

    btnRef.forEach((element) =>{
            element.innerText = "";
            count=0;

    })

})

// restart btn
restartBtn.addEventListener("click", ()=>{
    btnRef.forEach((element) =>{
        element.innerText = "";
        count=0;

});
});




const winFunction = (letter) =>{
    if(letter = "X"){
        message.innerText = " X is win";
    }
    else{
        message.innerText = " O is win";

    }
    disableButtons();
}


//win logic 
const winChecker = () =>{

    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
     ];

     if(element1 !="" && (element2 !="") && (element3 !="")){
        if((element1 == element2)&& (element2== element3)){
            winFunction(element1);
        }
     }
    }

}
//display x/o

btnRef.forEach((element) => {

    element.addEventListener("click", () =>{
        if(xTurn){
            xTurn = false;
            element.innerHTML = "X";
            element.disabled = true;
        }else{

            xTurn = true;
            element.innerHTML = "O";
            element.disabled = true;
        }
        count +=1;
        if(count == 9){
            message.innerText = " Game Drow";
            disableButtons();
        }
        winChecker();
    });
   
});