var currentUserName = document.querySelector('#currentUserName');
var currentUserEmail = document.querySelector('#currentUserEmail');
var currentUserPassword = document.querySelector('#currentUserPassword');

var username = "";
var email = "";
var password = 'godeetsgo';

const createform = document.querySelector('#createform');
createform.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // create rendom username as email
  function makeEmail() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    email = text + ('@my.deets.pro')
    username = email.replace("@my.deets.pro", "")
    return email;
  }

  // create a user in database
  auth.createUserWithEmailAndPassword(makeEmail(), password).then(cred => {

    // update the current user
    var user = firebase.auth().currentUser

    // set users in fireStore
    firebase.firestore().collection('users').doc(cred.user.uid).set({
      firstName: username,
      middleName: '',
      lastName: '',
      email: '',
      businessPhone: '',
      mobilePhone: '',
      homePhone: '',
      jobTitle: '',
      company: '',
      website: '',
      snapchat: '',
      facebook: '',
      instagram: '',
      twitter: '',
      image: 'https://cpng.pikpng.com/pngl/s/552-5529288_tie-user-default-suit-business-contact-comments-icon.png',
      prefix: '',
      suffix: '',
      nickName: '',
      description: '',
      firstLogin: true,
      defaultUser: true
    }).then(() => {

      // update current username in frontend
      currentUserName.innerHTML = ('<strong>Username:</strong> ' + username)
      currentUserEmail.innerHTML = ('<strong>Email:</strong> ' + email)
      currentUserPassword.innerHTML = ('<strong>Password:</strong> ' + password)
      
    }).catch(err => {
      console.log(err.message)
    })

  })

})