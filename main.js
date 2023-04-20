

document.addEventListener('mousemove', (event) => {
    // we need to get x and y coordinates of mouse cursor
    console.log(`Mouse X: ${event.clientX}, Mouse Y: 
    ${event.clientY}`);
    // place the pet 50 pixels from the cursor
    // console.log(document.querySelector("#pet".style.top));
    // console.log(document.querySelector("#pet").style.top);
    // const x = event.clientX;
    // const y = event.clientY;
    // console.log('x: ' + `${event.clientX - 10}`);
    // console.log('y: ' + `${event.clientY - 10}`);
    document.querySelector("#pet").style.top = `${event.clientY - 30}px`;
    document.querySelector("#pet").style.left = `${event.clientX - 30}px`;
});

// array of #pet src values
const pets = ['pug.gif', 'frog.gif', 'fish.gif'];


document.addEventListener('click', () => {
    // console.log(Math.floor(Math.random()*pets.length));
    document.querySelector("#pet").src = pets[Math.floor(Math.random() * pets.length)];
});