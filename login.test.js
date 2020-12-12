
describe('Google', () => {
    beforeAll(async () => {
      await page.goto('https://google.com');
    });
  
    it('should be titled "Google"', async () => {
      await expect(page.title()).resolves.toMatch('Google');
    });
  });


// require('dotenv').config();
// const open = require('open');

// var assert = require('assert');
// const { login } = require('./login.js');





// // module.exports.redditLoginTest = function() {
//     class LoginLogout {
//         loginTest() {
//             it('should open the reddit login page', async() => {
//             // opens a window of the default browser
//             await open("https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F");
//             });
//             // window.onload = function() {
//                 it('enters the username', function() {
//                     // Grab USERNAME and enter it into the Username field
//                     const loginBox = document.getElementById('loginUsername');
//                     loginBox.focus();
//                     loginBox.select();
//                     loginBox.value = process.env.USERNAME;
//                 });
//                 it('enters the password', function() {
//                     // Grab PASSWORD and enter it into the Password field
//                     const passwordBox = document.getElementById('loginPassword');
//                     passwordBox.focus();
//                     passwordBox.select();
//                     passwordBox.value = "Tester123!";
//                 })
//                 it('clicks Login', function() {
//                     //   Click the button
//                     document.getElementsByTagName('button')[0].click();
    
    
//                     //   Waiting for the page to load before continuing
//                     document.addEventListener('DOMContentLoaded', function(event) {
//                         console.log("Login successful!");
//                     })
//                 });
//             }

        
//         logoutTest() {
//             it('should log the user out', function() {
//                 console.log("I'm outta here!");
//             })
//         }
//     }
// module.exports = {LoginLogout};