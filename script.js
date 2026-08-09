const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let noClicks = 0;


// YES

yesBtn.addEventListener("click", function () {

    window.location.href = "yes.html";

});


// NO

noBtn.addEventListener("click", function () {

    noClicks++;

    const padding = 20;

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

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

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;


    // MESSAGE

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

        noBtn.classList.add("no-gone");

        setTimeout(() => {

            noBtn.style.display = "none";

        }, 500);

    }

});