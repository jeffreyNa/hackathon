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
    document.querySelector("#pet").style.top = `${event.clientY - 2}px`;
    document.querySelector("#pet").style.left = `${event.clientX - 2}px`;
});

// array of #pet src values
const pets = ['pug.gif', 'fish.gif', 'rat.gif', 'bird.gif', 'cat.gif', 'butterfly.gif', 'frog.gif', 'bunny.gif'];

let changePet = true;

document.addEventListener('keydown', function(event) {
    if (event.key === 'k') {
      // Code to run when the 'k' key is pressed
      changePet = !changePet;
    }
  });

  document.addEventListener('click', () => {
    if (changePet === true) {
      document.querySelector("#pet").src = pets[Math.floor(Math.random() * pets.length)];
    }
    // console.log(Math.floor(Math.random()*pets.length));
});