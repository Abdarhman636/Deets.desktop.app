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
        username = email.replace("@my.deets.pro","")
        return email;
    }

    //  create random paswword
    // function makePass() {
    //   var password = "";
    //   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //   for (var i = 0; i < 12; i++)
    //     password += possible.charAt(Math.floor(Math.random() * possible.length));
    //   return password;
    // }

    // create a user in database
    auth.createUserWithEmailAndPassword(makeEmail(), password).then(cred => {

        // update the current user
        var user = firebase.auth().currentUser

        // set users in fireStore
        firebase.firestore().collection('users').doc(username).set({
          firstName : username,
          middleName : '',
          lastName : '',
          email : email,
          businessPhone : '',
          mobilePhone : '',
          homePhone : '',
          jobTitle : '',
          company : '',
          website : '',
          snapchat : '',
          facebook : '',
          instagram : '',
          twitter : '',
          image: '',
          prefix: '',
          suffix: '',
          nickName: '',
          description: '',
          firstLogin: true,
          defaultUser: true
        }).then(() => {

          console.log('user Created')
          console.log('user id:' + cred.user.uid)
          console.log(email)
          console.log(username)

          // update current username in frontend
          currentUserName.innerHTML = username;
          currentUserEmail.innerHTML = email;
          currentUserPassword.innerHTML = password;



        }).catch(err => {
          console.log(err.message)
        })

    })

})