const db = firebase.firestore();
let player = null;

function getPlayers() {
  db.collection("players")
    .get()
    .then(resp =>
      console.log(
        resp.docs[0]._document.data.internalValue.root.value.internalValue
      )
    );
}

const form = document.querySelector(".signInForm");
form.onsubmit = submit;

// saves the player's name in localstorage, and updates the "player" variable for later use.
function submit(event) {
  event.preventDefault();
  const name = document.querySelector(".loginInput");
  localStorage.setItem("Name", name.value);
  player = name.value;
}

// this saves a new player in the firestore database
function addPlayer(player) {
  db.collection("players").add({ player: name.value });
  console.log(localStorage.getItem("Name"));
}
