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
  firebase.analytics();

   const database = firebase.database()
database.ref().on('value', (snapshot)=>{
console.log('from on function',snapshot.val())
})

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
