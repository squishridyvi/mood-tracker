document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".scan-button img").addEventListener("click", function() {
        document.querySelector(".spinner").style.display = "inline-block";
        setTimeout(function() {
            document.querySelector(".spinner").style.display = "none";
            window.location.href = "result.html";
        }, 3000);


    });
});

