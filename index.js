window.addEventListener('load', (event) => {
    console.log('loaded');
    
    document.querySelector('#website-button').addEventListener('click', function() {
        console.log('website click');
        window.location.replace('https://www.amexus.com/');
    });
});