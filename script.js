// ==========================================
// LOVE LETTER SCRIPT
// ==========================================

// Typing Effect
const message = "Hey Puchki ❤️, I made something special only for you...";
let index = 0;

function typeWriter() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    if (index < message.length) {

        typing.textContent += message.charAt(index);

        index++;

        setTimeout(typeWriter, 70);

    }

}

window.addEventListener("load", () => {

    typeWriter();

    updateLoveCounter();

    createBalloon();

});


// ==========================================
// SHOW ENVELOPE
// ==========================================

function showLove() {

    const envelope = document.getElementById("envelope");
    const btn = document.getElementById("openBtn");

    if (envelope) {

        envelope.style.display = "block";

    }

    if (btn) {

        btn.style.display = "none";

    }

}


// ==========================================
// OPEN LETTER
// ==========================================

let heartInterval = null;

function openLetter() {

    const top = document.querySelector(".top");

    if (top) {

        top.style.transform = "rotateX(180deg)";

    }

    setTimeout(() => {

        const envelope = document.getElementById("envelope");
        const letter = document.getElementById("letter");
        const music = document.getElementById("bgMusic");

        if (envelope) {

            envelope.style.display = "none";

        }

        if (letter) {

            letter.style.display = "block";

            letter.classList.add("fade-in");

           window.scrollTo({
    top: letter.offsetTop,
    behavior: "smooth"
});

        }

        if (music) {

            music.play().catch(() => {});

        }

        if (!heartInterval) {

            heartInterval = setInterval(createHeart, 300);

        }

    }, 800);

}


// ==========================================
// MUSIC PLAYER
// ==========================================

function toggleAudio() {

    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicToggleBtn");

    if (!music || !btn) return;

    if (music.paused) {

        music.play();

        btn.textContent = "⏸️";

    } else {

        music.pause();

        btn.textContent = "▶️";

    }

}
// ==========================================
// FLOATING HEARTS
// ==========================================

function createHeart() {

    const container = document.getElementById("hearts");

    if (!container) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    container.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 4000);

}


// ==========================================
// HOT AIR BALLOONS
// ==========================================

function createBalloon() {

    const container = document.getElementById("balloon-container");

    if (!container) return;

    if (container.querySelectorAll(".balloon").length >= 8) return;

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    const rope = document.createElement("div");
    rope.className = "rope";

    balloon.appendChild(rope);

    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = (10 + Math.random() * 8) + "s";
    balloon.style.transform = `scale(${0.7 + Math.random() * 0.5})`;

    container.appendChild(balloon);

    balloon.addEventListener("animationend", () => {

        balloon.remove();

    });

}

setInterval(createBalloon, 2500);


// ==========================================
// MOVING CLOUDS
// ==========================================

function createCloud() {

    const container = document.getElementById("clouds");

    if (!container) return;

    const cloud = document.createElement("div");

    cloud.className = "cloud";

    cloud.style.top = Math.random() * 35 + "vh";
    cloud.style.opacity = 0.15 + Math.random() * 0.2;
    cloud.style.animationDuration = (35 + Math.random() * 20) + "s";

    container.appendChild(cloud);

    cloud.addEventListener("animationend", () => {

        cloud.remove();

    });

}

for (let i = 0; i < 5; i++) {

    setTimeout(createCloud, i * 2500);

}

setInterval(createCloud, 8000);


// ==========================================
// TWINKLING STARS
// ==========================================

const stars = document.getElementById("stars");

if (stars) {

    for (let i = 0; i < 120; i++) {

        const star = document.createElement("div");

        star.style.position = "absolute";
        star.style.width = "2px";
        star.style.height = "2px";
        star.style.background = "white";
        star.style.borderRadius = "50%";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.opacity = Math.random();

        star.style.animation =
            `twinkle ${2 + Math.random() * 3}s infinite alternate`;

        stars.appendChild(star);

    }

}


// ==========================================
// FLOWER PETALS
// ==========================================

function createPetal() {

    const container = document.getElementById("petals");

    if (!container) return;

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.textContent = "🌸";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (18 + Math.random() * 18) + "px";
    petal.style.animationDuration = (6 + Math.random() * 5) + "s";

    container.appendChild(petal);

    petal.addEventListener("animationend", () => {

        petal.remove();

    });

}

setInterval(createPetal, 700);


// ==========================================
// SHOOTING STARS
// ==========================================

function createShootingStar() {

    const container = document.getElementById("shooting-stars");

    if (!container) return;

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * 250 + "px";

    container.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 2000);

}

setInterval(createShootingStar, 4000);


// ==========================================
// CURSOR HEART TRAIL
// ==========================================

let lastHeart = 0;

document.addEventListener("mousemove", (e) => {

    if (Date.now() - lastHeart < 40) return;

    lastHeart = Date.now();

    const heart = document.createElement("div");

    heart.className = "cursor-heart";

    const hearts = ["❤️", "💖", "💕", "💗"];

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 800);

});
// ==========================================
// FLIP CARDS
// ==========================================

document.querySelectorAll(".flip-card").forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("flipped");

    });

});


// ==========================================
// LETTER FADE-IN
// ==========================================

const letter = document.getElementById("letter");

if (letter) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-in");

            }

        });

    });

    observer.observe(letter);

}


// ==========================================
// BUTTON GLOW
// ==========================================

const openButton = document.getElementById("openBtn");

if (openButton) {

    openButton.classList.add("glow");

}


// ==========================================
// GIFT BOX (OPTIONAL)
// ==========================================

function openGift() {

    const gift = document.getElementById("giftBox");

    if (!gift) {

        showLove();
        return;

    }

    gift.classList.add("openGift");

    setTimeout(() => {

        gift.style.display = "none";

        showLove();

    }, 1000);

}


// ==========================================
// LOVE COUNTDOWN
// ==========================================

// ❤️ Change this date to your relationship date
const loveDate = new Date("2023-08-18T00:00:00");

function updateLoveCounter() {

    const loveDays = document.getElementById("loveDays");
    const loveTime = document.getElementById("loveTime");

    if (!loveDays || !loveTime) return;

    const now = new Date();

    const diff = now - loveDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const seconds = Math.floor((diff / 1000) % 60);

    loveDays.textContent = `${days} Days`;

    loveTime.textContent =
        `${hours} Hours • ${minutes} Minutes • ${seconds} Seconds`;

}

setInterval(updateLoveCounter, 1000);


// ==========================================
// WINDOW RESIZE (OPTIONAL)
// ==========================================

window.addEventListener("resize", () => {

    // Reserved for future responsive animations

});


// ==========================================
// END OF SCRIPT
// ==========================================