document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("status").textContent =
        "Thank you, your feedback has been received!";
});
