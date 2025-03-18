// Anuj Builds

document.addEventListener("mousemove", (e) => {
    const fireball = document.createElement("div");
    fireball.classList.add("fireball");
    document.body.appendChild(fireball);

    let x = e.clientX;
    let y = e.clientY;
    fireball.style.left = `${x}px`;
    fireball.style.top = `${y}px`;

    setTimeout(() => {
        fireball.remove();
    }, 500);
})