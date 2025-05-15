let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
let message = '';
for (let i = 0; i < sentence.length; i++) {
   message += sentence[i];
    
}

greetingEl.textContent = message;