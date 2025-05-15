// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

function saveLead() {
    console.log("Button clicked!")
}

let btn = document.getElementById("input-btn");
btn.addEventListener("click", saveLead);

