window.addEventListener('load', (event) => {
    document.querySelector('#website-button').addEventListener('click', function() {
        window.location.href = 'https://www.amexus.com/';
    });

    document.querySelector('#call-button').addEventListener('click', function() {
        alert('call button clicked');
    });
});