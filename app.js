// import firebase from 'firebase'

const db = firebase.firestore();
db.collection('players').get().then(resp => console.log(resp.docs[0]._document.data.internalValue.root.value.internalValue))

// get()
// .then(resp => console.log(resp))