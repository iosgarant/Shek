
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

document.getElementById("langBtn").addEventListener("click", () => {
    alert("Til funksiyasi keyingi versiyada qo‘shiladi.");
});

// Dynamic service loading
window.addEventListener("DOMContentLoaded", () => {
    fetch("assets/services.json")
        .then(res => res.json())
        .then(data => {
            const container = document.querySelector("#services ul");
            container.innerHTML = "";
            data.forEach(service => {
                const li = document.createElement("li");
                li.innerHTML = `<strong>${service.name}</strong> – ${service.duration} – <em>${service.price}</em>`;
                container.appendChild(li);
            });
        })
        .catch(err => console.error("Xatolik:", err));
});

// AnimeJS-based section animation
window.addEventListener("DOMContentLoaded", () => {
    anime({
        targets: '.anime-section',
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(300),
        duration: 1000,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.anim-logo',
        scale: [0.7, 1],
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeOutElastic(1, .6)'
    });
});

// WebGL 3D Cube
const canvas = document.getElementById("cubeCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gl = canvas.getContext("webgl");
if (gl) {
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    canvas.style.opacity = "0.08";
    canvas.style.pointerEvents = "none";
    // Minimal cube background using shaders skipped here for size, but normally integrated
}

// Audio Effects
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("clickSound").play();
    });
});
