
importScripts(
  'https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyBlNTBFFrwj_3YQHfWU-JgC7vpOTPZkO1k","authDomain":"everypayjoy.firebaseapp.com","databaseURL":"https:\u002F\u002Feverypayjoy.firebaseio.com","projectId":"everypayjoy","storageBucket":"everypayjoy.appspot.com","messagingSenderId":"553710966821","appId":"1:553710966821:web:42e63fd60662e7479047cc","measurementId":"G-YYG5C3YZBF"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()
