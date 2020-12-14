
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

          describe('Logout test', () => {
            it('clicks on the user dropdown menu', async () => {
              const dropdownMenu = page.$('USER_DROPDOWN_ID')
              dropdownMenu.click;
            });
            it('clicks the Logout button', function() {
                const logoutButton = page.$('vzhy90YD0qH7ZDJi7xMGw');
                logoutButton.click;
            })
        }