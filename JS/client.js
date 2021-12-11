const evC = document.querySelector('#eventsContainer');

const printEvent = (txt) => {
    const newEl = document.createElement('li');
    newEl.innerHTML = txt;
    evC.appendChild(newEl);
}

printEvent('Checking if this is working');
printEvent('Please work');
printEvent('Luv u');