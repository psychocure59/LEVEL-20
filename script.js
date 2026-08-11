// ==========================================
// ELEMENTS
// ==========================================

const collectionScreen =
    document.getElementById("collectionScreen");

const prankScreen =
    document.getElementById("prankScreen");

const countdown =
    document.getElementById("countdown");

const progress =
    document.getElementById("progress");

const percentage =
    document.getElementById("percentage");


// ==========================================
// FAKE DISPLAY DATA
// ==========================================

const fakeIP =
    "192.168.1." +
    (Math.floor(Math.random() * 200) + 20);

document.getElementById("fakeIP").textContent =
    fakeIP;


const deviceID =
    Math.random()
        .toString(16)
        .substring(2, 10)
        .toUpperCase();

document.getElementById("deviceID").textContent =
    deviceID;


// ==========================================
// TARGET DATE
// SEPTEMBER 1, 2026
// 12:00 AM IST
// ==========================================

const targetDate =
    new Date(
        "2026-08-11T04:40:00+05:30"
    ).getTime();


// ==========================================
// PREVENT DOUBLE START
// ==========================================

let prankStarted = false;


// ==========================================
// SHOW ORIGINAL PRANK
// ==========================================

function showPrank() {

    if (prankStarted) {
        return;
    }

    prankStarted = true;


    // Fade countdown screen

    collectionScreen.style.opacity = "0";

    collectionScreen.style.transform =
        "scale(1.03)";


    // Wait for fade animation

    setTimeout(function () {

        collectionScreen.style.display =
            "none";

        // Show original prank

        prankScreen.style.display =
            "flex";

    }, 1000);
}


// ==========================================
// COUNTDOWN
// ==========================================

function updateCountdown() {

    const now =
        Date.now();

    const difference =
        targetDate - now;


    // ======================================
    // DATE REACHED
    // ======================================

    if (difference <= 0) {

        countdown.textContent =
            "00 : 00 : 00 : 00";

        progress.style.width =
            "100%";

        percentage.textContent =
            "100%";

        showPrank();

        return;
    }


    // ======================================
    // CALCULATE TIME
    // ======================================

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    // ======================================
    // DISPLAY COUNTDOWN
    // ======================================

    countdown.textContent =

        String(days).padStart(2, "0")
        + " : " +

        String(hours).padStart(2, "0")
        + " : " +

        String(minutes).padStart(2, "0")
        + " : " +

        String(seconds).padStart(2, "0");
}


// ==========================================
// FAKE PROGRESS
// ==========================================

let fakeProgress = 0;


setInterval(function () {

    if (fakeProgress < 97) {

        fakeProgress +=
            Math.random() * 2;

        fakeProgress =
            Math.min(
                fakeProgress,
                97
            );


        progress.style.width =
            fakeProgress + "%";


        percentage.textContent =
            Math.floor(fakeProgress) + "%";
    }

}, 1200);


// ==========================================
// START COUNTDOWN
// ==========================================

prankScreen.style.display =
    "none";

collectionScreen.style.display =
    "flex";


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


// ==========================================
// ORIGINAL PRANK BUTTONS
// ==========================================

const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

const message =
    document.getElementById("message");

let noClicks = 0;


// ==========================================
// YES BUTTON
// ==========================================

yesBtn.addEventListener(
    "click",
    function () {

        window.location.href =
            "yes.html";

    }
);


// ==========================================
// NO BUTTON
// ==========================================

noBtn.addEventListener(
    "click",
    function () {

        noClicks++;


        const padding = 20;


        const buttonWidth =
            noBtn.offsetWidth;


        const buttonHeight =
            noBtn.offsetHeight;


        const maxX =
            window.innerWidth -
            buttonWidth -
            padding;


        const maxY =
            window.innerHeight -
            buttonHeight -
            padding;


        const x =
            padding +
            Math.random() *
            (maxX - padding);


        const y =
            padding +
            Math.random() *
            (maxY - padding);


        noBtn.style.left =
            x + "px";


        noBtn.style.top =
            y + "px";


        // ==================================
        // MESSAGES
        // ==================================

        if (noClicks === 1) {

            message.textContent =
                "DENIED. TRY AGAIN...";

        }

        else if (noClicks === 2) {

            message.textContent =
                "ACCESS REQUEST REJECTED.";

        }

        else if (noClicks === 3) {

            message.textContent =
                "SYSTEM DOES NOT ACCEPT 'NO'.";

        }

        else if (noClicks === 4) {

            message.textContent =
                "FINAL WARNING...";

        }

        else if (noClicks >= 5) {

            message.textContent =
                "OPTION 'NO' REMOVED.";


            noBtn.classList.add(
                "no-gone"
            );


            setTimeout(
                function () {

                    noBtn.style.display =
                        "none";

                },
                500
            );

        }

    }
);
