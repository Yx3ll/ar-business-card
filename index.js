window.addEventListener('load', (event) => {
    const websitebutton = document.querySelector('#website-button');
    if (websitebutton) {
        websitebutton.addEventListener('click', function () {
            window.location.href = 'https://www.amexus.com/';
        });
    }
    const mailtoButton = document.querySelector('#mailto-button');
    if (mailtoButton) {
        mailtoButton.addEventListener('click', function () {
            window.open('mailto:info@amexus.com');
        });
    }

    const callButtonMro = document.querySelector('#call-button-mro');
    if (callButtonMro) {
        callButtonMro.addEventListener('click', function () {
            console.log("call button clicked");
            // call MRO
            window.open('tel:+4915122734511');
        });
    }

    const mailButtonMro = document.querySelector('#amil-button-mro');
    if (mailButtonMro) {
        mailButtonMro.addEventListener('click', function () {
            console.log("mail button clicked");
            // call MRO
            window.open('mailto:info@amexus.com');
        });
    }
});