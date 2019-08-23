const db = firebase.firestore();
const player = null;

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

function submit(event) {
  event.preventDefault();
  const name = document.querySelector(".loginInput");
  localStorage.setItem("Name", name.value);
  player = name.value;
}

function addPlayer(player) {
  db.collection("players").add({ player: name.value });
  console.log(localStorage.getItem("Name"));
}
