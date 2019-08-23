const db = firebase.firestore();

// get the sign in form and attach the submit function to it.

const form = document.querySelector(".signInForm");
form.onsubmit = submit;

function getPlayers() {
  db.collection("players")
    .get()
    .then(resp =>
      console.log(
        resp.docs[0]._document.data.internalValue.root.value.internalValue
      )
    );
}

// saves the player's name in localstorage, and updates the "player" variable for later use.
function submit(event) {
  event.preventDefault();
  const name = document.querySelector(".loginInput");
  localStorage.setItem("Name", name.value);
  location.assign("game.html")
}

// this saves a new player in the firestore database
function addPlayer() {
  const playerName = localStorage.getItem("Name");
  db.collection("players").add({ player: playerName });
  console.log(localStorage.getItem("Name"));
}
