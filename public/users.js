const userList = document.querySelector('#userList');

function renderUsers(doc){
    var li = document.createElement('Li');
    var name = document.createElement('span');
    var email = document.createElement('span')

    li.setAttribute('data-d', doc.id)
    name.innerHTML = doc.data().firstName;
    email.textContent = doc.data().email;

    li.appendChild(name)
    li.appendChild(email)

    userList.appendChild(li)
}


db.collection('users').get().then((users) => {
    users.docs.forEach(doc => {
        renderUsers(doc)
        console.log(doc.data().firstName)
        console.log(doc.data().email)
    })
})