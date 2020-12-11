import USERNAME from './test/process.env';
import PASSWORD from './process.env';

function login() {
    window.open("https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F");
    function enterLoginInfo() {
        // Grab USERNAME and enter it into the Username field
        const loginBox = document.getElementById('loginUsername');
        loginBox.focus();
        loginBox.select();
        loginBox.value = USERNAME;

        // Grab PASSWORD and enter it into the Password field
        const passwordBox = document.getElementById('loginPassword');
        passwordBox.focus();
        passwordBox.select();
        passwordBox.value = PASSWORD;
    }
    enterLoginInfo();
    //   Click the button
    document.getElementsByTagName('button')[0].click();

    //   Waiting for the page to load before continuing
    document.addEventListener('DOMContentLoaded', function(event) {
        console.log("Login successful!");
    })


    console.log("Logout successful!");
}

export {login};