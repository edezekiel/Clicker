// import firebase from 'firebase'

const db = firebase.firestore();
db.collection("players")
  .get()
  .then(resp =>
    console.log(
      resp.docs[0]._document.data.internalValue.root.value.internalValue
    )
  );

// get()
// .then(resp => console.log(resp))

const form = document.querySelector(".signInForm");
form.onsubmit = submit;

function submit(event) {
  event.preventDefault();
  const name = document.querySelector(".loginInput");
  localStorage.setItem("Name", name.value);
  console.log(localStorage.getItem("Name"))
}
