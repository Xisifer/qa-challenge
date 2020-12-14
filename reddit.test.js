
const {USERNAME, PASSWORD} = require('./resources.json');
// Configurable Host
const host = 'https://www.reddit.com/login'

jest.setTimeout(20000)

// Ideally all these tests would be separated out into different files, but Jest doesn't seem to have a way to specify a certain order to run tests in. In this case, the order of the tests (login > do stuff > logout) is important, so I'm putting it all sequentially in one file here.

describe('Login test', () => {
    beforeAll(async () => {
        await page.goto("https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F");
    });
    
    it('should be titled "reddit.com: Log in"', async () => {
        await expect(page.title()).resolves.toMatch('reddit.com: Log in');
    });

    it('enters the credentials', async () => {
        await page.type('#loginUsername', USERNAME)
        await page.type('#loginPassword', PASSWORD)
    });
    
    it('clicks Login and proceeds', async () => {
        const loginButton = await page.$('.AnimatedForm__submitButton');
        await loginButton.click();

        // Waiting for the page navigation using a strict timer rather than waiting for an event, because I can't get the event to be detected properly.
        // await new Promise(r => setTimeout(r,10000))

    });




    it('checks that the user is redirected to reddit homepage', async () => {
        await page.waitForNavigation({waitUntil: 'networkidle2'});
        // await page.waitForSelector('title');
        // await new Promise(r => setTimeout(r,10000))
        await expect(page.title()).resolves.toMatch('reddit: the front page of the internet');
        console.log('Are we here?');
    })
});



describe('Saving a post', () => {
    it('does a thing', function() {
        console.log("Thing done!");
    })
})

describe('Joining a subreddit', () => {
    it('clicks the join sub link on the homepage', function() {
        console.log("I like kittens");
    })
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