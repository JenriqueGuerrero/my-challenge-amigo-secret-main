const friend = [];

function addFriend() {
    let getFriend = document.getElementById('nameFriend').value.trim();

    if (getFriend !== "") {
        friend.push(getFriend);
        updateFriendList();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }

    clearInput();
}

function randomizeFriend() {
    if (friend.length > 2) { 
        let randomIndex = Math.floor(Math.random() * friend.length);
        let selectedFriend = friend[randomIndex];
        document.getElementById('result').innerHTML = `El amigo seleccionado es: <strong>${selectedFriend}</strong>`;
    } else {
        alert("Debe ingresar más de dos nombres para realizar el sorteo.");
    }
}

function updateFriendList() {
    let friendList = document.getElementById('friendList');
    friendList.innerHTML = "";

    friend.forEach(name => {
        let listItem = document.createElement('li');
        listItem.textContent = name;
        friendList.appendChild(listItem);
    });
}

function clearInput() {
    document.getElementById('nameFriend').value = '';
}