
let boxes = document.querySelectorAll(".box");
let rest = document.querySelector("reset");
let msgcontainer = document.querySelector("msg-cotainer");
let msg = document.querySelector("#msg");
let newgame = document.querySelector("#new-btn");


let winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let trun0 = true;//player/
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (trun0) {
            box.innerText = "X";
            trun0 = false;
        } else {
            box.innerText = "O";
            trun0 = true;
        }
        box.disabled = true;
        checkwin();

    });
});

const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showWiner = (winner) => {
    msg.innerText = (`congarts you win the game${winner}`);
    // msgcontainer.classList.remove("hide");
    disabledboxes();
}
const checkwin = () => {

    for (let win of winning) {

        let posval1 = boxes[win[0]].innerText;
        let posval2 = boxes[win[1]].innerText;
        let posval3 = boxes[win[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 == posval2 && posval2 == posval3) {
                console.log("winner", posval1);
                showWiner(posval1);
            }
        }
    }
}

// const showWiner = (posval1) => {
//     msg.innerText = (`congarts you win the game${posval1}`);
//     msgcontainer.classList.remove("hide");
// }

