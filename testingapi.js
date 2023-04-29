
window.onload = pageLoad;
function pageLoad() {

  document.getElementById('redirectButton') = dosomething;
  /*
  function onLoad() {
    gapi.load('auth2', function() {
        gapi.auth2.init().then(function() {
            var currentUser = gapi.auth2.getAuthInstance().currentUser.get();
            var userName = currentUser.getBasicProfile().getName();
            document.getElementById("user-name").innerHTML = "Hello, " + userName;
        });
    });
    
}
onLoad(); 
*/
}

function dosomething(){
  window.location = "Secondpage.html";
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  sessionStorage.setItem('isLoggedIn', true); // set a session storage variable to indicate that the user is logged in
  window.location = "Secondpage.html"; // redirect to a new page
}