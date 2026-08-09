const bootScreen =
    document.getElementById("bootScreen");

const levelScreen =
    document.getElementById("levelScreen");

const playerPage =
    document.getElementById("playerPage");

const progressBar =
    document.getElementById("progressBar");

const progressPercent =
    document.getElementById("progressPercent");

const loadingStatus =
    document.getElementById("loadingStatus");

const bootMessage =
    document.getElementById("bootMessage");


let progress = 0;


const bootMessages = [

    "Loading player data...",

    "Loading character profile...",

    "Calculating experience...",

    "Unlocking new level...",

    "Synchronizing memories...",

    "Preparing player profile...",

    "WELCOME, PLAYER."

];


const bootStatuses = [

    "STARTING GAME",

    "LOADING DATA",

    "READING PROFILE",

    "LEVEL CHECK",

    "SYNC COMPLETE",

    "PROFILE READY",

    "SYSTEM READY"

];


const bootInterval = setInterval(() => {


    progress +=
        Math.floor(
            Math.random() * 4
        ) + 1;


    if (progress >= 100) {

        progress = 100;

        clearInterval(bootInterval);


        bootMessage.textContent =
            "WELCOME, PLAYER.";

        loadingStatus.textContent =
            "SYSTEM READY";


        setTimeout(() => {

            bootScreen.style.opacity = "0";

            bootScreen.style.visibility =
                "hidden";


            levelScreen.classList.add(
                "active"
            );


            setTimeout(() => {

                levelScreen.classList.remove(
                    "active"
                );


                playerPage.classList.add(
                    "active"
                );


                document.body.style.overflow =
                    "auto";

            }, 3500);


        }, 800);

    }


    progressBar.style.width =
        progress + "%";


    progressPercent.textContent =
        progress + "%";


    const index =
        Math.min(
            Math.floor(progress / 15),
            bootMessages.length - 1
        );


    bootMessage.textContent =
        bootMessages[index];


    loadingStatus.textContent =
        bootStatuses[index];


}, 80);


/* =====================================
   CONTINUE BUTTON
===================================== */

const continueBtn =
    document.getElementById("continueBtn");


continueBtn.addEventListener(
    "click",
    () => {

        window.location.href =
            "interest.html";

    }
);