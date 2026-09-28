const wordBox = document.getElementById("wordBox");
const countBox = document.getElementById("countBox");

let count = 0;

wordBox.addEventListener("keydown", (e) => {

    if (e.key === " ") {
        e.preventDefault();

        const text = wordBox.innerText.trim();

        if (text.length > 0) {
            count++;
            countBox.textContent = "Count: " + count;

            wordBox.innerText = "";
        }
    }
});

wordBox.addEventListener("click", () => {
    wordBox.focus();
});