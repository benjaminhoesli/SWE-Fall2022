import React from 'react';
import {Button} from '@material-ui/core';
import firebase from 'firebase/compat/app';
// Help from Ashish Adhikari


export function LoginButton({setCurrentUser}) {
  function logIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      setCurrentUser(result.user);
      localStorage.setItem('currentUser', JSON.stringify(result.user));
    }).catch(function(error) {
      console.log(error);
    });
  }

  return (
    <Button variant="outlined" onClick={logIn}>
      Log In
    </Button>
  );
}
export function LogoutButton({setCurrentUser}){
  function logOut() {
    firebase.auth().signOut().then(function() {
      setCurrentUser(null);
      localStorage.removeItem('currentUser');
    }).catch(function(error) {
      console.log(error);
    });
  }

  return (
    <Button variant="outlined" onClick={logOut}>
      Log Out
    </Button>
  );

}