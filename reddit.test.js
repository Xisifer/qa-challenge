
// Configurable Host
const host = 'https://www.reddit.com/login'


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
    
    it('clicks Login and proceeds', async () => {
        const loginButton = page.$('.AnimatedForm__submitButton');
        console.log("loginButton is: " + loginButton);

        JSON.stringify(page);

        console.log("page is: " + page);

        await loginButton.click();
        await page.click('.AnimatedForm__submitButton');


        // Waiting for the page navigation using a strict timer rather than waiting for an event, because I can't get the event to be detected properly.
        await new Promise(r => setTimeout(r,3000))
        // page.waitForNavigation();
    });

    it('checks that the user is redirected to reddit homepage', async () => {
        await page.waitForSelector('title');
        console.log("We have the title!");
        await expect(page.title()).resolves.toMatch('reddit: the front page of the internet');
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
        const dropdownMenu = page.$('USER_DROPDOWN_ID')
        dropdownMenu.click;
    });
    it('clicks the Logout button', function() {
        const logoutButton = page.$('vzhy90YD0qH7ZDJi7xMGw');
        logoutButton.click;
    })
});