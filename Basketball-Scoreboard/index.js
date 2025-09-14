let homeScore = 0
let guestScore = 0

function addToHome(points) {
    homeScore = homeScore + points;
    document.getElementById("home-score").textContent = homeScore;
}
function addToGuest(points) {
    guestScore = guestScore + points;
    document.getElementById("guest-score").textContent = guestScore;
}