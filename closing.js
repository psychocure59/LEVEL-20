// ========================================
// LEVEL 20 FINAL CHAPTER
// ========================================

const screens =
    document.querySelectorAll(".screen");

const music =
    document.getElementById("closingMusic");

const startButton =
    document.getElementById("startButton");


let currentScreen = 0;

let started = false;


// ========================================
// MUSIC
// ========================================

if (music) {

    music.volume = 0.4;

}


// Start music after interaction

document.addEventListener(
    "click",
    () => {

        if (music && music.paused) {

            music.play().catch(() => {});

        }

    },
    { once: true }
);


// ========================================
// SCREEN CONTROL
// ========================================

function showScreen(index) {

    screens.forEach((screen) => {

        screen.classList.remove("active");

    });


    if (screens[index]) {

        screens[index].classList.add("active");

    }

}


// ========================================
// AUTOMATIC CINEMATIC SEQUENCE
// ========================================

function startSequence() {

    if (started) return;

    started = true;


    showScreen(0);


    setTimeout(() => {

        showScreen(1);

    }, 3500);


    setTimeout(() => {

        showScreen(2);

    }, 6500);


    setTimeout(() => {

        showScreen(3);

    }, 9500);


    setTimeout(() => {

        showScreen(4);

    }, 13000);


    setTimeout(() => {

        showScreen(5);

    }, 17000);

}


// Start when page loads

window.addEventListener(
    "load",
    () => {

        setTimeout(
            startSequence,
            700
        );

    }
);


// ========================================
// FINAL BUTTON
// ========================================

if (startButton) {

    startButton.addEventListener(
        "click",
        () => {

            startButton.innerHTML =
                "LEVEL 20 STARTING...";

            startButton.disabled = true;


            setTimeout(() => {

                document.body.style.transition =
                    "opacity 1.5s ease";

                document.body.style.opacity =
                    "0";


            }, 800);


            setTimeout(() => {

                /*
                 * Change this to whichever
                 * page should open next.
                 */

                window.location.href =
                    "index.html";

            }, 2400);

        }
    );

}


// ========================================
// KEYBOARD EFFECT
// ========================================

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "ArrowRight") {

            currentScreen++;

            if (
                currentScreen >=
                screens.length
            ) {

                currentScreen =
                    screens.length - 1;

            }

            showScreen(currentScreen);

        }


        if (event.key === "ArrowLeft") {

            currentScreen--;

            if (currentScreen < 0) {

                currentScreen = 0;

            }

            showScreen(currentScreen);

        }

    }
);


// ========================================
// CONSOLE
// ========================================

console.log(`
================================

     MEMORY ARCHIVE CLOSED

     PLAYER: SURAJ
     LEVEL: 20

     FINAL CHAPTER LOADED

================================
`);