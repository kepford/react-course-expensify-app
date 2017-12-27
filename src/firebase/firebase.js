import * as firebase from 'firebase';
import { config } from './../../.firebase';

firebase.initializeApp(config);

const database = firebase.database();

// database.ref('notes/L0wfgaGBC9d9OA4Nbxw').remove();

// database.ref('notes/L0wfgaGBC9d9OA4Nbxw').update({
//   body: 'Buy stuff'
// });

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
