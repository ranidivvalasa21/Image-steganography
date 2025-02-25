document.getElementById("decode-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch("/decode", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            let messageBox = document.getElementById("decoded-message");
            messageBox.style.padding = "10px";
            messageBox.style.borderRadius = "5px";

            if (data.message.includes("Decryption failed")) {
                messageBox.style.color = "red";
                messageBox.style.background = "#ffcccc";
                messageBox.innerText = "❌ Decryption Failed!";
            } else {
                messageBox.style.color = "#00ff99";
                messageBox.style.background = "#252525";
                messageBox.innerText = "🔍 Decoded Message: " + data.message;
            }
        })
        .catch(error => console.error("Error:", error));
});