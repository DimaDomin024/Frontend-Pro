const container = document.querySelector("#fContainer");

    container.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            alert(`Натиснуто: ${e.target.textContent}`);
        }
    });