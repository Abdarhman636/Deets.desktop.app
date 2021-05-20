const createform = document.querySelector('#createform');
createform.addEventListener('submit', (e) => {
    e.preventDefault();

    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const string_length = 8;
    // const username = '';
    // const password = 'test'
    

    function makeid() {
        var text = "";
        var username = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
          username = text + ('@my.deets.pro')
      
        return username;
      }
      
      console.log(makeid());

    //   paswword

      function makePass() {
        var password = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 12; i++)
          password += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return password;
      }
      
      console.log(makePass());



    auth.createUserWithEmailAndPassword(makeid(), makePass()).then(cred => {
        console.log(cred)
    })
})