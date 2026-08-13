let he = document.querySelector("h3");

let user = [];
let game = [];

let buttons = ["box1", "box2", "box3", "box4"];

let level = 0;
let start = false;

function startGame() {
    document.querySelector("body").style.backgroundColor = "white";

    if (start == false) {
        start = true;
        levelup();
    }
}

// Desktop keyboard
document.addEventListener("keydown", startGame);

// Mobile touch
document.addEventListener("touchstart", startGame);

function btnflash(btn) {
    btn.classList.add("flash");

    setTimeout(() => {
        btn.classList.remove("flash");
    }, 500);
}

function checkans(idx) {
    if (user[idx] === game[idx]) {

        if (user.length == game.length) {
            setTimeout(levelup, 1000);
        }

    } else {
        he.innerHTML = `Game Over!<br>Your Score: ${level - 1}<br>Press any key to restart`;

        document.querySelector("body").style.backgroundColor = "red";

        reset();
    }
}

function reset() {
    start = false;
    game = [];
    user = [];
    level = 0;
}

function btnuserflash(btn) {
    btn.classList.add("userflash");

    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 500);

    let usercolor = btn.getAttribute("id");

    user.push(usercolor);

    checkans(user.length - 1);
}

function levelup() {
    user = [];

    level++;

    he.innerText = `Level ${level}`;

    let index = Math.floor(Math.random() * 4);

    let randcolor = buttons[index];

    game.push(randcolor);

    let btn = document.querySelector(`.${randcolor}`);

    btnflash(btn);
}

let allbox = document.querySelectorAll(".box");

for (let box of allbox) {
    box.addEventListener("click", () => {
        if (start) {
            btnuserflash(box);
        }
    });
}
