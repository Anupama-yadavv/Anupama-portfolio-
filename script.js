const circle = document.getElementById('circle');

document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Move the circle to the mouse position
    circle.style.transform = `translate(${mouseX - 15}px, ${mouseY - 15}px)`; // Adjusting by 15 to center the circle
});

// end mouse javascrip code