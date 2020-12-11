// import dotEnv from 'dotenv';
// dotEnv.config();

// import USERNAME from './.env';
// import PASSWORD from './.env';
const open = require('open');





var assert = require('assert');
const { login } = require('./login.js');

// const open = require('open');





// module.exports.redditLoginTest = function() {
    class LoginLogout {
        loginTest() {
            it('should open the reddit login page', function() {
            // opens a window of the default browser
            open("https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F");
            });
            it('enters the username', function() {
                // Grab USERNAME and enter it into the Username field
                const loginBox = document.getElementById('loginUsername');
                loginBox.focus();
                loginBox.select();
                loginBox.value = "QA-test-throwaway";
            });
            it('enters the password', function() {
                // Grab PASSWORD and enter it into the Password field
                const passwordBox = document.getElementById('loginPassword');
                passwordBox.focus();
                passwordBox.select();
                passwordBox.value = "Tester123!";
            })
            it('clicks Login', function() {
                //   Click the button
                document.getElementsByTagName('button')[0].click();


                //   Waiting for the page to load before continuing
                document.addEventListener('DOMContentLoaded', function(event) {
                    console.log("Login successful!");
                })
            });
        }
        logoutTest() {
            it('should log the user out', function() {
                console.log("I'm outta here!");
            })
        }
    }
module.exports = {LoginLogout};