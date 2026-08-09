const nextBtn =
    document.getElementById("nextBtn");


/* =====================================
   CARD REVEAL
===================================== */

const cards =
    document.querySelectorAll(
        ".main-card, .reason-card, .series-card, .gore-card, .series-reason"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


cards.forEach(
    (card) => {

        observer.observe(card);

    }
);


/* =====================================
   NEXT BUTTON
===================================== */

nextBtn.addEventListener(
    "click",
    () => {

        window.location.href ="pic.html";

    }
);