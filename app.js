// import firebase from 'firebase'

const db = firebase.firestore();
db.collection('players').get()
.then(resp => console.log(resp))