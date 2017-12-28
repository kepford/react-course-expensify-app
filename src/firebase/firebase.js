import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // Child removed.
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// Get array of our data.
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.table(expenses);
//   });

// Subscribe to event data
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.table(expenses);
// });

// Add new expenses
// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'Here is a note about rent.',
//   amount: 12345,
//   createdAt: 987656778
// });

// database.ref('expenses').push({
//   description: 'Phone',
//   note: 'Test note',
//   amount: 5000,
//   createdAt: 91197656778
// });

// database.ref('expenses').push({
//   description: 'Food',
//   note: 'Test note',
//   amount: 55533,
//   createdAt: 1000987656778
// });

// Notes:

// Remove a note
// database.ref('notes/L0wfgaGBC9d9OA4Nbxw').remove();

// database.ref('notes/L0wfgaGBC9d9OA4Nbxw').update({
//   body: 'Buy stuff'
// });

// Add note
// database.ref('notes').push({
//   title: 'To Do',
//   body: 'Just do it'
// });

// const firebaseNotes = {
//   notes: {
//     asdlkfd: {
//       title: 'First note!',
//       body: 'This is the note'
//     },
//     asiujlsd: {
//       title: 'Another note!',
//       body: 'This is the note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is the note'
// }, {
//   id: '97alkj',
//   title: 'Another note!',
//   body: 'This is the note'
// }];

// database.ref('notes').set(firebaseNotes);


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Bob Kepford',
//   age: 39,
//   stressLevel: 6,
//   job: {
//     title: 'Developer',
//     company: 'Google'
//   },
//   isSingle: false,
//   location: {
//     city: 'Caruthers',
//     country: 'US'
//   }
// }).then(() => {
//   console.log('Data was saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(() => {
//   console.log('Data was saved');
// }).catch((e) => {
//   console.log('Data update failed.', e);
// });

// database.ref().set('This is my data.');

// database.ref('age').set(40);
// database.ref('location/city').set('New York');

// database.ref('attributes').set({
//   height: 80,
//   weight: 200
// }).then(() => {
//   console.log('Added height and weight.');
// }).catch((e) => {
//   console.log('The database set failed', e);
// });

// Remove data with set
// database.ref('isSingle').set(null);

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log("Removed isSingle.");
//   }).catch((e) => {
//     console.log("Remove failed: ", e);
//   });
