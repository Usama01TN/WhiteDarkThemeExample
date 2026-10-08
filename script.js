const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});

const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.textContent = "Added!";
        
        setTimeout(() => {
            button.textContent = "Buy Now";
        }, 1000);
    });
});