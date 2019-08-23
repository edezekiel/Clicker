const db = firebase.firestore();

// get the sign in form and attach the submit function to it.
const form = document.querySelector(".signInForm");
form.onsubmit = submit;

// saves the player's name in localstorage, and updates the "player" variable for later use.
function submit(event) {
  event.preventDefault();
  const name = document.querySelector(".loginInput");
  localStorage.setItem("Name", name.value);
  window.location.assign("game.html");
}
