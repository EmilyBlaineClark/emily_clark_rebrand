// Get modal
var modal = document.getElementById('modal');

// Get button that opens the modal
var btn = document.getElementById("button");

// Get element that closes modal
var span = document.getElementsByClassName("close")[0];

// When user clicks button, open modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When user clicks on x, close modal
span.onclick = function() {
    modal.style.display = "none";
}

// When user clicks outside of modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
