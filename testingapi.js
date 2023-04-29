
window.onload = pageLoad;
function pageLoad() {
  if(sessionStorage.getItem('isLoggedIn') == 'true'){
    
  }  

}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  sessionStorage.setItem('isLoggedIn', true); // set a session storage variable to indicate that the user is logged in
  window.location.href = 'Secondpage.html'; // redirect to a new page
}