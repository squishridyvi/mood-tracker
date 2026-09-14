document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".scan-button img").addEventListener("click", function() {
        document.querySelector(".spinner").style.display = "inline-block";
        let entryText = document.querySelector(".textarea").value; 

        fetch("http://127.0.0.1:8000/analyze-emotion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: entryText })
        })


        setTimeout(function() {
            document.querySelector(".spinner").style.display = "none";
            window.location.href = "result.html";
        }, 3000);
        localStorage.setItem("entryText", entryText);

    });
});


