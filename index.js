window.addEventListener('load', (event) => {
    let websitebutton = document.querySelector('#website-button');
    if (websitebutton) {
        websitebutton.addEventListener('click', function () {
            window.location.href = 'https://www.amexus.com/';
        });
    }

    document.querySelector('#call-button').addEventListener('click', function () {
        alert('call button clicked');
    });
});