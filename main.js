

document.addEventListener('mousemove', (event) => {
    // we need to get x and y coordinates of mouse cursor
    console.log(`Mouse X: ${event.clientX}, Mouse Y: 
    ${event.clientY}`);
    // place the pug 50 pixels from the cursor
    // console.log(document.querySelector("#pug".style.top));
    // console.log(document.querySelector("#pug").style.top);
    // const x = event.clientX;
    // const y = event.clientY;
    console.log('x: ' + `${event.clientX - 10}`);
    console.log('y: ' + `${event.clientY - 10}`);
    document.querySelector("#pug").style.top = `${event.clientY - 10}px`;
    document.querySelector("#pug").style.left = `${event.clientX - 10}px`;
});

