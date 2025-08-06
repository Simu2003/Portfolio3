function showHobby(hobby) {
    // Hide all hobby contents
    const hobbyContents = document.querySelectorAll('.hobby-content');
    hobbyContents.forEach(content => {
        content.style.display = 'none';
    });

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.hobby-tabs button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected hobby content and add active class to the button
    document.getElementById(hobby).style.display = 'block';
    document.querySelector(`button[onclick="showHobby('${hobby}')"]`).classList.add('active');
}
