
const {USERNAME, PASSWORD} = require('./resources.json');
const puppeteer = require('puppeteer');
// Configurable Host
const host = 'https://www.reddit.com/login'

jest.setTimeout(20000)

// Ideally all these tests would be separated out into different files, but Jest doesn't seem to have a way to specify a certain order to run tests in. In this case, the order of the tests (login > do stuff > logout) is important, so I'm putting it all sequentially in one file here.

describe('Login test', () => {
    beforeAll(async () => {
        await page.goto(host);
        
    });

    // it('checks that the user is on the reddit homepage', async () => {
    //     await page.waitForNavigation({waitUntil: 'networkidle2'});
    //     await expect(page.title()).resolves.toMatch('reddit: the front page of the internet');
    // })

    // it('clicks the Log In button', async () => {
    //     await page.waitForSelector('._3Wg53T10KuuPmyWOMWsY2F', {visible: true});
    //     const frontPageLoginButton = await page.$('._3Wg53T10KuuPmyWOMWsY2F')
    //     await frontPageLoginButton.click();
    // })

    // it('checks that the user is on the Login page', async () => {
    //     await page.waitForNavigation({waitUntil: 'networkidle2'});
    //     await expect(page.title()).resolves.toMatch('reddit.com: Log in');
    // });

    it('enters the credentials', async () => {
        // await page.waitForNavigation({waitUntil: 'networkidle2'});
        await page.type('#loginUsername', USERNAME);
        await page.type('#loginPassword', PASSWORD);
    });
    
    it('clicks Login and proceeds', async () => {
        const loginButton = await page.$('.AnimatedForm__submitButton');
        await loginButton.click();
    });
    it('checks that the user is redirected to reddit homepage', async () => {
        await page.waitForNavigation({waitUntil: 'networkidle2'});
        await expect(page.title()).resolves.toMatch('reddit: the front page of the internet');
    });
});



describe('Saving a post', () => {
    it('clicks the first Save button found', async () => {
        const postSaveButton = await page.$('._10K5i7NW6qcm-UoCtpB3aK')
        await postSaveButton.click();
    });

});

describe('Joining a subreddit', () => {
    it('navigates to the subreddit of the first post we see', async () => {
        // Click the first subreddit link we see
        const subredditButton = await page.$('._3ryJoIoycVkA88fy40qNJc');
        await subredditButton.click(); 
        // Wait for page to load
        await page.waitForNavigation({waitUntil: 'networkidle2'});
    });
    it('clicks the Join Sub button', async () => {
        const subredditJoinButton = await page.$('._3VgTjAJVNNV7jzlnwY-OFY');
        await subredditJoinButton.click();
    });

    it('verifies that the successful joining popup appears', async () => {
        await expect(page.$('_7JH6kQpO-bx66b9ajIZrz')).stringContaining('joined');
    });
})



    
describe('Logout test', () => {
    it('clicks on the user dropdown menu', async () => {
        const dropdownMenu = page.$('#USER_DROPDOWN_ID')
        dropdownMenu.click;
    });
    it('clicks the Logout button', function() {
        const logoutButton = page.$('.vzhy90YD0qH7ZDJi7xMGw');
        logoutButton.click;
    })
});