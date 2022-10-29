window.addEventListener('load', (event) => {
    let websitebutton = document.querySelector('#website-button');
    if (websitebutton) {
        websitebutton.addEventListener('click', function () {
            window.location.href = 'https://www.amexus.com/';
        });
    }

    const callButton = document.querySelector('#call-button');
    if (callButton) {
        callButton.addEventListener('click', function () {
            console.log("call button clicked");
            // call MRO
            window.open('tel:+4915122734511');
        });
    }
});