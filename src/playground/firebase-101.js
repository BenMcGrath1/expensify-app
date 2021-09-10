const expense1 = {
  description: 'Golf',
  note: 'Eagles Nest',
  amount: 4500,
  createdAt: 12345
};
const expense2 = {
  description: 'Golf club',
  note: 'pitching wedge',
  amount: 5500,
  createdAt: 123
};
const expense3 = {
  description: 'Golf shoe',
  note: 'Puma',
  amount: 8800,
  createdAt: 5633
};

// child_removed

db.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed

db.ref('expenses').on('child_changed', (snapshot) => {
  console.log('This changed: ', snapshot.key, snapshot.val());
});

// child_added

db.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// db.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnap) => {
//       expenses.push({ id: childSnap.key, ...childSnap.val() });
//     });

//     console.log(expenses);
//   });

// db.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((snap) => {
//     expenses.push({ id: snap.key, ...snap.val() });
//   });
//   console.log(expenses);
// });

// db.ref('expenses').push(expense1);

// db.ref('notes').push({
//   title: 'Course Topics',
//   body: 'Open G, Fingerpicking, Harmonics'
// });

// db.ref('notes').set(notes);

// Firebase does not support arrays!!!

// db.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// db.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// });

// setTimeout(() => {
//   db.ref('age').set(44);
// }, 3500);

// db.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log('Yo Data: ', val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// db.ref()
//   .set({
//     name: 'Ben McGrath',
//     age: 35,
//     stressLevel: 7,
//     job: {
//       title: 'Front End Engineer',
//       company: 'Gaslight'
//     },
//     isSingle: true,
//     location: {
//       city: 'Cincinnati',
//       state: 'iowa'
//     }
//   })
//   .then(() => {
//     console.log('data is saved!');
//   })
//   .catch((e) => {
//     console.log('Failure: ', e);
//   });

// db.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// db.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('remove was successful');
//   })
//   .catch((e) => {
//     console.log('was not removed: ', e);
//   });

// db.ref('attributes')
//   .set({ height: 74, weight: 250 })
//   .then(() => {
//     console.log('attributes are saved!');
//   })
//   .catch((e) => {
//     console.log('Failure: ', e);
//   });
