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

    const techparty2018 = document.querySelector('#techparty-2018');
    if (techparty2018) {
        techparty2018.muted = true;
    }

    const callButtonMro = document.querySelector('#call-button-mro');
    if (callButtonMro) {
        callButtonMro.addEventListener('click', function () {
            console.log("call button clicked");
            // Zeitansage der dt. Telekom anrufen (0,20€ pro Anruf)
            window.open('tel:+491804100100');
        });
    }

    const mailButtonMro = document.querySelector('#mail-button-mro');
    if (mailButtonMro) {
        mailButtonMro.addEventListener('click', function () {
            console.log("mail button clicked");
            window.open('mailto:info@amexus.com');
        });
    }
});

window.addEventListener('DOMContentLoaded', (e) => {
    const video = document.querySelector('video');
    if (video) {
        video.style.width = '100%';
        video.style.height = 'auto';
        video.style.left = '0px';
    }
});