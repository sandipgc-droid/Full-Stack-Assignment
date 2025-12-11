document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    // create status message if it doesn't exist
    let status = document.getElementById("status");

    if (!status) {
        status = document.createElement("p");
        status.id = "status";
        status.className = "mt-3 text-success fw-bold";
        document.querySelector(".card").appendChild(status);
    }

    status.textContent = "Thank you, your feedback has been received!";
});
