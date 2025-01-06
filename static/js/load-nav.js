document.addEventListener('DOMContentLoaded', () => {
    fetch('/static/nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
    });