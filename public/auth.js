var currentUserName = document.querySelector('#currentUserName');

var username = "";
var email = "";
var password = 'godeets';

const createform = document.querySelector('#createform');
createform.addEventListener('submit', (e) => {
    e.preventDefault();

    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const string_length = 8;

    // create rendom username as email
    // function makeUsername() {
    //     var text = "";
    //     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    //     for (var i = 0; i < 10; i++)
    //       text += possible.charAt(Math.floor(Math.random() * possible.length));
    //       username = text
    //     return username;
    // }
    // console.log(makeUsername())

    // create rendom username as email
    function makeEmail() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
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
        // console.log(cred)

        // update the current user
        var user = firebase.auth().currentUser

        // set users in fireStore
        firebase.firestore().collection('users').doc(username).set({
          firstName : username,
          middleName : '',
          lastName : '',
          email : '',
          businessPhone : '',
          mobilePhone : '',
          homePhone : '',
          jobTitle : '',
          company : '',
          website : '',
          snapchat : '',
          facebook : '',
          instagram : 'test',
          twitter : '',
          image: '',
          prefix: '',
          suffix: '',
          nickName: '',
          description: 'test',
          firstLogin: false,
          defaultUser: true
        }).then(() => {

          console.log('user Created')
          console.log('user id:' + cred.user.uid)
          console.log(email)
          console.log(username)
          
          // get current user info from firestore
          db.collection('users').get().then((users) => {
            users.docs.forEach(doc => {
              if (user.uid === doc.id) {
                console.log(doc.data())

                // update current username in frontend
                currentUserName.innerHTML = doc.data().firstName;
              }
            })
        })


        }).catch(err => {
          console.log(err.message)
        })

    })

})