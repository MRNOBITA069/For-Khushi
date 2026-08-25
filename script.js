/* =========================================
   ELEMENTS
========================================= */

const reactionGif =
    document.getElementById(
        "reactionGif"
    );

const question =
    document.getElementById(
        "question"
    );

const yesButton =
    document.getElementById(
        "yesButton"
    );

const noButton =
    document.getElementById(
        "noButton"
    );

const floatingElements =
    document.getElementById(
        "floatingElements"
    );


/* =========================================
   FLOATING SYMBOLS
========================================= */

const floatingSymbols = [

    "🌸",
    "🌷",
    "🌺",
    "💗",
    "💕",
    "💖",
    "💞",
    "✨"

];


/* =========================================
   CREATE FLOATING ELEMENT
========================================= */

function createFloatingElement() {

    const element =
        document.createElement(
            "div"
        );


    element.className =
        "floating-element";


    /* Random symbol */

    element.textContent =
        floatingSymbols[
            Math.floor(
                Math.random() *
                floatingSymbols.length
            )
        ];


    /* Random horizontal position */

    element.style.left =
        Math.random() * 100 + "%";


    /* Random size */

    const size =
        16 +
        Math.random() * 25;


    element.style.fontSize =
        size + "px";


    /* Random speed */

    const duration =
        7 +
        Math.random() * 8;


    element.style.animationDuration =
        duration + "s";


    /* Random sideways movement */

    const drift =
        (
            Math.random() * 160 -
            80
        ) + "px";


    element.style.setProperty(
        "--drift",
        drift
    );


    /* Random delay */

    element.style.animationDelay =
        Math.random() * 1.5 + "s";


    floatingElements.appendChild(
        element
    );


    /* Remove after animation */

    setTimeout(

        () => {

            element.remove();

        },

        (duration + 3) * 1000

    );

}


/* =========================================
   START FLOATING ELEMENTS
========================================= */

setInterval(

    createFloatingElement,

    600

);


/* Create initial particles */

for (
    let i = 0;
    i < 5;
    i++
) {

    setTimeout(
        createFloatingElement,
        i * 250
    );

}


/* =========================================
   GIF SEQUENCE
========================================= */

const gifSequence = [

    "assets/gifs/no1.gif",

    "assets/gifs/no2.gif",

    "assets/gifs/no3.gif",

    "assets/gifs/no4.gif"

];


/* =========================================
   QUESTION SEQUENCE
========================================= */

const textSequence = [

    "Are you sure? 😭",

    "Khushi... come on 🥺",

    "You really clicked NO again? 💀",

    "Okay... you're making this difficult 😭"

];


/* =========================================
   NO BUTTON TEXT
========================================= */

const noButtonTexts = [

    "NO 😭",

    "STILL NO?!",

    "KHUSHI 😭",

    "WHY 💀",

    "PLEASE 🥹"

];


/* =========================================
   STATE
========================================= */

let noClicks = 0;

let yesScale = 1;


/* =========================================
   CHANGE GIF
========================================= */

function changeGif(
    newSource
) {

    reactionGif.classList.add(
        "gif-changing"
    );


    setTimeout(

        () => {

            reactionGif.src =
                newSource;


            reactionGif.classList.remove(
                "gif-changing"
            );


            reactionGif.classList.remove(
                "gif-enter"
            );


            void reactionGif.offsetWidth;


            reactionGif.classList.add(
                "gif-enter"
            );

        },

        220

    );

}


/* =========================================
   CHANGE QUESTION
========================================= */

function changeQuestion(
    newText
) {

    question.classList.add(
        "text-changing"
    );


    setTimeout(

        () => {

            question.textContent =
                newText;


            question.classList.remove(
                "text-changing"
            );

        },

        180

    );

}


/* =========================================
   NO BUTTON
========================================= */

noButton.addEventListener(

    "click",

    () => {


        /* GIF */

        const gifIndex =
            Math.min(
                noClicks,
                gifSequence.length - 1
            );


        changeGif(
            gifSequence[gifIndex]
        );


        /* Question */

        const textIndex =
            Math.min(
                noClicks,
                textSequence.length - 1
            );


        changeQuestion(
            textSequence[textIndex]
        );


        /* Increase click count */

        noClicks++;


        /* Grow YES button */

        yesScale =
            Math.min(
                1 +
                noClicks * 0.16,

                2.05
            );


        yesButton.style.transform =
            `scale(${yesScale})`;


        /* Change NO text */

        noButton.textContent =
            noButtonTexts[
                Math.min(
                    noClicks,
                    noButtonTexts.length - 1
                )
            ];


        /* Shake NO */

        noButton.classList.remove(
            "shake"
        );


        void noButton.offsetWidth;


        noButton.classList.add(
            "shake"
        );

    }

);


/* =========================================
   CELEBRATION HEART
========================================= */

function createCelebrationHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "celebration-heart";


    const symbols = [

        "💗",
        "💕",
        "💖",
        "🌸",
        "✨"

    ];


    heart.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    /* Position near YES */

    const rect =
        yesButton.getBoundingClientRect();


    heart.style.left =
        rect.left +
        rect.width / 2 +
        "px";


    heart.style.top =
        rect.top +
        rect.height / 2 +
        "px";


    /* Random movement */

    const x =
        (
            Math.random() * 300 -
            150
        ) + "px";


    const y =
        -(
            Math.random() * 300 +
            100
        ) + "px";


    heart.style.setProperty(
        "--x",
        x
    );


    heart.style.setProperty(
        "--y",
        y
    );


    heart.style.setProperty(
        "--rotation",
        (
            Math.random() * 180 -
            90
        ) + "deg"
    );


    document.body.appendChild(
        heart
    );


    setTimeout(

        () => {

            heart.remove();

        },

        1500

    );

}


/* =========================================
   YES BUTTON
========================================= */

yesButton.addEventListener(

    "click",

    () => {

        /* Prevent multiple clicks */

        yesButton.disabled = true;


        /* Change to YES GIF */

        changeGif(
            "assets/gifs/yes.gif"
        );


        /* Keep Hey Khushi... 👀 */

        /* Change question */

        changeQuestion(
            "YAAAAAAA! 🎉💗"
        );


        /* Hide NO */

        noButton.style.display =
            "none";


        /* YES celebration */

        yesButton.classList.add(
            "celebrate"
        );


        yesButton.style.transform =
            "scale(1.25)";


        yesButton.textContent =
            "LET'S GO ✨";


        /* Create celebration hearts */

        for (
            let i = 0;
            i < 20;
            i++
        ) {

            setTimeout(

                createCelebrationHeart,

                i * 50

            );

        }


        /* =====================================
           CONNECT TO PAGE 2
        ===================================== */

        setTimeout(

            () => {

                window.location.href =
                    "page2.html";

            },

            1800

        );

    }

);