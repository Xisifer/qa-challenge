
const {USERNAME, PASSWORD} = require('./resources.json');
const puppeteer = require('puppeteer');
// Configurable Host
const host = 'https://www.reddit.com/login'

jest.setTimeout(10000)

// Ideally all these tests would be separated out into different files, but Jest doesn't seem to have a way to specify a certain order to run tests in. In this case, the order of the tests (login > do stuff > logout) is important, so I'm putting it all sequentially in one file here.

describe('Reddit login', () => {
    it('checks that the user is on the reddit homepage', async () => {
        await page.goto(host, {waitUntil: 'domcontentloaded'});
        await expect(page.title()).resolves.toMatch('reddit.com: Log in');
    });

    it('enters the user credentials', async () => {
        // entering our credentials
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

describe('Joining a subreddit', () => {
    it('returns to reddit.com', async () => {
        await page.goto('https://www.reddit.com', {waitUntil: 'domcontentloaded'})
    });
    it('checks for the user not being a member of any subreddits', async () => {

        // await expect(subredditButton).not.toBeNull();
    });
    it('navigates to the subreddit of the first post we see', async () => {
        // Click the first subreddit link we see
        let subredditButton = await page.$('._3ryJoIoycVkA88fy40qNJc');
        // Putting in a catcher in case the user doesn't have any subreddits
        if(subredditButton = null) {
            await page.goto('https://www.reddit.com/r/popular')
            await page.waitForNavigation({waitUntil: 'networkidle2'});
            // Click the first subreddit joiner button we find on r/popular
            await subredditButton.click(); 
        } else {
            await subredditButton.click(); 
            // Wait for page to load
            await page.waitForNavigation({waitUntil: 'networkidle2'});
        }

    });



    it('clicks the Join Sub button', async () => {

        // Click the button
        const subredditJoinButton = await page.$('._2QmHYFeMADTpuXJtd36LQs');
        expect(subredditJoinButton).to.not.BeNull();
        await subredditJoinButton.click();
    });

    it('verifies that the successful joining popup appears', async () => {
    // wait for element defined by XPath appear in page
        // await page.waitForXPath("(//span[@class='_7JH6kQpO-bx66b9ajIZrz'])[1]")
        await page
            .waitForSelector('._7JH6kQpO-bx66b9ajIZrz')
            .then(async () => {
                const confirmationModal = await page.$('._7JH6kQpO-bx66b9ajIZrz')
                const confirmationModalString = await confirmationModal.$x("//button[contains(., 'joined')]");
                expect(confirmationModalString).not.toBeNull()
                   // wait for element defined by XPath appear in page

            });
        
    });
});


describe('Saving a post', () => {
    it('clicks the first Save button found', async () => {
        const postSaveButton = await page.$('._10K5i7NW6qcm-UoCtpB3aK')
        await postSaveButton.click();
        // const savedPostTitle = await page.
    });
    it('goes to the user saved post list', async () => {
        const userSavedPostPage = 'https://www.reddit.com/user/' + USERNAME + '/saved/';
        await page.goto(userSavedPostPage, {waitUntil: 'domcontentloaded'});
    });
    it('compares the saved post to the stored post', async () => {
        const storedPostTitle = page.$('._eYtD2XCVieq6emjKBH3m');
        expect(savedPostTitle).toMatch(storedPostTitle);
    });
    it('returns to reddit.com', async () => {
        await page.goto('https://www.reddit.com', {waitUntil: 'domcontentloaded'})
    });
});


    
describe('Logout test', () => {
    it('clicks on the user dropdown menu and then Log Out', async () => {
        const dropdownMenu = await page.$('#USER_DROPDOWN_ID')
        await dropdownMenu.click();
        // clicking Logout Button
        const logoutButton = await page.$('.vzhy90YD0qH7ZDJi7xMGw');
        await logoutButton.click(); 
    });
});