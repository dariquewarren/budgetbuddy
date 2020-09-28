import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBcF0jGmaHAC63ibKFzd-7BsLX-qv0dL1k",
    authDomain: "budgetbuddyapp-a2e68.firebaseapp.com",
    databaseURL: "https://budgetbuddyapp-a2e68.firebaseio.com",
    projectId: "budgetbuddyapp-a2e68",
    storageBucket: "budgetbuddyapp-a2e68.appspot.com",
    messagingSenderId: "898490365481",
    appId: "1:898490365481:web:c2865cd53f3bca37540e38",
    measurementId: "G-0J9RCWE6D1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


   const database = firebase.database()

// setup expensed with 3 items. {descrip, note, amount, created at}
// 3 push calls to input expenses into database

database.ref('expenses').push({
  description: 'expense 1',
  note: 'an expense',
  amount: 5 ,
  createdAt: 123456789 ,

})
database.ref('expenses').push({
  description: 'second expense',
  note: 'an expense',
  amount: 100 ,
  createdAt: 426183759 ,

})
database.ref('expenses').push({
  description: 'sir expense the third of one',
  note: 'an expense',
  amount: 3 ,
  createdAt: 987654321 ,

})


// database.ref('notes').push({
//   title: 'todo',
//   body: 'grab a za from habibi ultra at the spiznizzy'
// })

// database.ref('notes/-MIL2pd0VRn0pO34_HJm').update({
//   title: 'new ultimate title',
//   body: 'i have no ideas'
// })

// database.ref().on('value',(snapshot)=>{
//   const db = snapshot.val()
//   const name = snapshot.val().name
//   const job = snapshot.val().job.title
//   const company = snapshot.val().job.company
 
//   const sentence = `${name} is a ${job} at ${company}`
// console.log(sentence)
// })

// setTimeout(() => {
//   database.ref().update({
//     name : 'Darique Warren',
//     'job/title': 'Junior Developer',
//     'job/company': 'Amazon'
//   })
  
  
// }, 4000);

// database.ref()
// .once('value').then((snapshot)=>{
//   const dbSnap = snapshot.val(); 
//   console.log('success!', dbSnap)
// }).catch((e)=>{
// console.log('error fetching data', e)
// })


  // database.ref().set({
  //     name: 'Darique ',
  //     age: 32,
  //     stressLevel: '6',
  //     job: {
  //       title: 'software dev',
  //       company: 'google'
  //     },
  //     location: {
  //         city: 'Harlem',
  //         country: 'USA'
  //     }
  // }).then(()=>{
  //   console.log('data is safed')
  // }).catch((e)=>{
  //   console.log('thisfailed')
  // })


  // change the strees level to a 9
  // change job.company value to amazon
  // change location.city to seattle

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'amazon',
//   'location/city': 'seattle'
// })
 

// database.ref().update({
//   job: 'software demi - god',
//   'location/city': 'ofLights'
// })


  // database.ref('isSingle').remove().then(()=>{
  //   console.log('success')
  // }).catch((e)=>{
  //   console.log('error')
  // })

  // attributes
  // height num &&& weight num
