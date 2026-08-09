// ========================================
// MEMORY VAULT - LEVEL 20
// ========================================

const music = document.getElementById("journeyMusic");
const continueButton = document.getElementById("continueBtn");


// ========================================
// MUSIC
// ========================================

if (music) {

    music.volume = 0.45;

    window.addEventListener("load", () => {

        music.play().catch(() => {
            console.log("Waiting for user interaction...");
        });

    });

    document.addEventListener("click", () => {

        if (music.paused) {
            music.play().catch(() => {});
        }

    }, { once: true });
}


// ========================================
// MEMORY CARD REVEAL
// ========================================

const cards = document.querySelectorAll(".memory-card");

const cardObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach((card) => {

    cardObserver.observe(card);

});


// ========================================
// LEVEL 20 DETECTION
// ========================================

const levelComplete =
    document.querySelector(".level-complete");


const levelObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                document.body.classList.add("level-unlocked");

                console.log("LEVEL 20 UNLOCKED!");

            }

        });

    },
    {
        threshold: 0.35
    }
);


if (levelComplete) {

    levelObserver.observe(levelComplete);

}


// ========================================
// CONTINUE BUTTON
// ========================================

if (continueButton) {

    continueButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ========================================
// IMAGE ERROR SYSTEM
// ========================================

const images =
    document.querySelectorAll(".photo-frame img");


images.forEach((image) => {

    image.addEventListener("error", () => {

        const frame =
            image.parentElement;

        frame.innerHTML = `

            <div class="error-frame">

                <div class="error-icon">
                    ?
                </div>

                <div class="error-code">
                    IMAGE ERROR
                </div>

                <h3>
                    IMAGE NOT FOUND
                </h3>

                <p>
                    ${image.alt}
                </p>

            </div>

        `;

    });

});


// ========================================
// MOUSE PARALLAX
// ========================================

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 2;


    document.documentElement.style.setProperty(
        "--mouse-x",
        `${x}px`
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        `${y}px`
    );

});


// ========================================
// KEYBOARD EASTER EGG
// ========================================

let secretCode = "";

document.addEventListener("keydown", (event) => {

    secretCode += event.key.toLowerCase();

    if (secretCode.length > 20) {

        secretCode =
            secretCode.slice(-20);

    }

    if (secretCode.includes("level20")) {

        console.log(
            "🎮 SECRET LEVEL 20 COMMAND ACTIVATED"
        );

        document.body.classList.add(
            "secret-mode"
        );

    }

});


// ========================================
// CONSOLE
// ========================================

console.log(`
=================================

       MEMORY VAULT

       PLAYER: SURAJ
       LEVEL: 20

       ARCHIVE STATUS: ONLINE

=================================
`);


continueBtn.addEventListener(
    "click",
    () => {

        window.location.href ="closing.html";

    }
);