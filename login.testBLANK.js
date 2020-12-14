
// Configurable Host
const host = 'https://www.reddit.com/login'

// describe('Reddit test', () => {
//     beforeAll(async () => {
//       await page.goto(host);
//     });
  
//     it('should be titled "Reddit"', async () => {
//       await expect(page.title()).resolves.toMatch('reddit: the front page of the internet');
//     });
//   });


// require('dotenv').config();
// const open = require('open');

// var assert = require('assert');
// const { login } = require('./login.js');





// module.exports.redditLoginTest = function() {
    // class LoginLogout {
        // loginTest() {
          describe('Login test', () => {
            beforeAll(async () => {
              await page.goto("https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F");
            });
          
            it('should be titled "reddit.com: Log in"', async () => {
              await expect(page.title()).resolves.toMatch('reddit.com: Log in');
            });

            it('enters the credentials', function() {
                // Grab USERNAME and enter it into the Username field
                const loginBox = page.$('loginUsername');
                loginBox.value = process.env.USERNAME;
                // Grab PASSWORD and enter it into the Password field
                const passwordBox = page.$('loginPassword');
                passwordBox.value = process.env.PASSWORD;
            });
          
            it('clicks Login and proceeds"', async () => {
              const loginButton = page.$('AnimatedForm__submitButton');
              loginButton.click;
              console.log("CLICK!");
            });
            // it('clicks Login', function() {
            //     //   Click the button

            // });

          });

        
    //     logoutTest() {
    //         it('should log the user out', function() {
    //             console.log("I'm outta here!");
    //         })
    //     }
    //   }
    // }