window.addEventListener('load', (event) => {
    console.log('loaded');
    console.log(document.querySelector('#website-button'));
    document.querySelector('#website-button').addEventListener('click', function() {
        console.log('website click');
        window.location.replace('https://www.amexus.com/');
    });
});