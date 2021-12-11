const evC = document.querySelector('#eventsContainer');

const printEvent = (txt) => {
    const newEl = document.createElement('li');
    newEl.innerHTML = txt;
    evC.appendChild(newEl);
}

// printEvent('Checking if this is working');
// printEvent('Please work');
// printEvent('f me');

const socket = io(); //interactive with server
socket.on('message', printEvent);


const onFormSubmit = (ev) => {
    ev.preventDefault(); //Prevent the form to be submitted and reload the page

    const input = document.querySelector('#chat').value;
    socket.emit('message', input);
    document.querySelector('#chat').value = ''; //erase
}

document
    .querySelector('#chatForm')
    .addEventListener('submit', onFormSubmit);