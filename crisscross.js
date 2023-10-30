const cells = document.querySelectorAll(".cell")
const statustext = document.querySelector("#statusText")
const restartbutton = document.querySelector("#restartbutton")
const winconditon = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentplayer = "X";
let running = false;

intialazegame()


function intialazegame() {
                cells.forEach(cell => cell.addEventListener("click", cellclicked))
                restartbutton.addEventListener("click", restartgame);
                statustext.textContent = `${currentplayer}'s turn`;
                running = true;

}
function cellclicked() {
                const cellindex = this.getAttribute('cellindex')
                if (options[cellindex] != "" || !running) {
                                return;
                }
                updatecell(this, cellindex);
                
                checkwinner();


}
function updatecell(cell, index) {
                options[index] = currentplayer;
                cell.textContent = currentplayer;

}
function changeplayer() {
                currentplayer = (currentplayer == "X") ? "O" : "X";
                statustext.textContent = `${currentplayer}'s turn`
}
function checkwinner() {
                let winner = false;

                for (let i = 0; i < winconditon.length; i++) {
                                const condition = winconditon[i];
                                const cell1 = options[condition[0]];
                                const cell2 = options[condition[1]];
                                const cell3 = options[condition[2]];
                                if (cell1 == "" || cell2 == "" || cell3 == "") {
                                                continue;
                                }
                                if (cell1 == cell2 && cell2 == cell3) {
                                                winner = true;
                                                break;
                                }
                }
                if (winner) {
                                statustext.textContent = `${currentplayer} wins!`;
                                running = false;
                }
                else if (!options.includes("")) {
                                statustext.textContent = 'Draw!!!';
                                running = false;
                }
                else {
                                changeplayer();
                }

}
function restartgame() {
                currentplayer = "X"
                options = ["", "", "", "", "", "", "", "", ""];
                statustext.textContent = `${currentplayer}' turn`;
                cells.forEach(cell => cell.textContent = "");
                running = true;

}