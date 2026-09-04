document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".scan-button img").addEventListener("click", function() {
        document.querySelector(".spinner").style.display = "block";
        setTimeout(function() {
            document.querySelector(".spinner").style.display = "none";
        }, 3000);
    });
});

