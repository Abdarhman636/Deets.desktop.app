const userList = document.querySelector('#userList');

userList.addEventListener('submit', (e) => {
    e.preventDefault();

    function renderUsers(doc){
        var li = document.createElement('Li');
        var name = document.createElement('span');

        li.setAttribute('data-id', doc.id)
        name.innerHTML = (`<strong>Name:` + `${doc.data().firstName}` + `</strong>`)

        li.appendChild(name)
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

