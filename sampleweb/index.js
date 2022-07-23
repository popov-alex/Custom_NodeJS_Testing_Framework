const header = document.querySelector('h1');

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('input');

    if (input.value.includes('@')) {

        header.innerHTML = 'Looks good!';
    } else {
        header.innerHTML = 'Invalid email';
    }
});
