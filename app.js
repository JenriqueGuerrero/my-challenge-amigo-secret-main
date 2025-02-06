
const friend = [];
const selectedFriends = []; // Lista para almacenar los amigos ya elegidos

function addFriend() {
    let getFriend = document.getElementById('nameFriend').value.trim();

    if (getFriend !== "" && !friend.includes(getFriend)) {
        friend.push(getFriend);
        updateFriendList();
    } else {
        alert("Por favor, ingresa un nombre válido o que no esté repetido.");
    }

    clearInput();
}

function randomizeFriend() {
    if (friend.length - selectedFriends.length > 0) {  
        let availableFriends = friend.filter(f => !selectedFriends.includes(f)); // Filtrar amigos no seleccionados
        let randomIndex = Math.floor(Math.random() * availableFriends.length);
        let selectedFriend = availableFriends[randomIndex];

        selectedFriends.push(selectedFriend); // Agregar el nombre a la lista de seleccionados
        document.getElementById('result').innerHTML = `El amigo seleccionado es: <strong>${selectedFriend}</strong>`;

    } else {
        alert("Todos los amigos ya han sido sorteados.");
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

function resetSelection() {
    selectedFriends.length = 0; // Vaciar la lista de seleccionados
    document.getElementById('result').innerHTML = "Sorteo reiniciado.";
}