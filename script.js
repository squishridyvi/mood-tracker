document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("firstName") || !localStorage.getItem("lastName")) {
        window.location.href = "index.html";
    } else {
        let firstName = localStorage.getItem("firstName");
        let lastName = localStorage.getItem("lastName");
        document.getElementById("welcome").textContent = `Welcome, ${firstName} ${lastName}!`;
    }
    document.querySelector(".scan-button img").addEventListener("click", function() {
        document.querySelector(".spinner").style.display = "inline-block";
        let entryText = document.querySelector(".textarea").value; 
        localStorage.setItem("entryText", entryText);

        fetch("http://127.0.0.1:8000/analyze-emotion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: entryText })
        })

        .then(response => response.json())
        .then(data => {
            localStorage.setItem("scores", JSON.stringify(data));
            document.querySelector(".spinner").style.display = "none";
            window.location.href = "result.html";

        })
        .catch(error => {
            document.querySelector(".spinner").style.display = "none";
            console.error("Error:", error);
        });
    });
});


