import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD_J2yMP23-xuMVEvqIRGk7ZflnutRKiE8',
  authDomain: 'what-am-i-drawing.firebaseapp.com',
  databaseURL: 'https://what-am-i-drawing.firebaseio.com',
  projectId: 'what-am-i-drawing',
  storageBucket: 'what-am-i-drawing.appspot.com',
  messagingSenderId: '296190757104',
};
firebase.initializeApp(config);

export const Auth = firebase.auth();

export const Database = firebase.database();

export const returnValue = ({ snapshot }) => snapshot.val();

export default firebase;
