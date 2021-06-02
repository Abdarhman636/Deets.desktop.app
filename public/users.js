const userList = document.querySelector('#userList');

userList.addEventListener('submit', (e) => {
    e.preventDefault();

    function renderUsers(doc){
        var li = document.createElement('li');
        var name = document.createElement('span');
        var email = document.createElement('small');
        var phone = document.createElement('small');
        var url = document.createElement('small');

        li.setAttribute('data-id', doc.id)
        name.innerHTML = (`<strong>Name: ` + `${doc.data().firstName}` + `</strong>`)
        email.innerHTML = ('<strong>Email: </strong>'  + doc.data().email)
        phone.innerHTML = ('<strong>Phone: </strong>'  + doc.data().businessPhone)
        url.innerHTML = ('<strong>URL: </strong>'  + doc.id)

        li.appendChild(name)
        li.appendChild(email)
        li.appendChild(phone)
        li.appendChild(url)
        userList.appendChild(li)
    }
    
    // get user info from firestore
    db.collection('users').get().then((users) => {
        users.docs.forEach(doc => {
            renderUsers(doc)
            console.log(doc.id)
        })
    })
})