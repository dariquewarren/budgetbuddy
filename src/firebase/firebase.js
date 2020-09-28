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
  database.ref().set({
      name: 'Darique ',
      age: 32,
      isSingle: true,
      location: {
          city: 'Harlem',
          country: 'USA'
      }
  }).then(()=>{
    console.log('data is saved')
  }).catch((e)=>{
    console.log('thisfailed')
  })

//   database.ref().set('this is my data')
  // database.ref('age').set({age:27})
  // database.ref('location/city').set("nyc")

  // setup then and catch
  // make sure catch actually works
  //switch rules to be open
  // make sure that then runs
  // database.ref('attributes').set({
  //   height: 73,
  //   weight:220
  // }).then(()=>{
  //   console.log('works!!')
  // }).catch((e)=>{
  //   console.log('failed', e)
  // })

  database.ref('isSingle').remove().then(()=>{
    console.log('success')
  }).catch((e)=>{
    console.log('error')
  })

  // attributes
  // height num &&& weight num
