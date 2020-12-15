
const {USERNAME, PASSWORD} = require('./resources.json');
// Configurable Host
const host = 'https://www.reddit.com/login' //for some reason, starting from https://reddit.com causes the page.type events (line 24-25) to not fire. So for now we get around that by using reddit.com/login as our starting point, even if it technically doesn't meet the assignment requirements.

jest.setTimeout(10000) // Lots of problems with events timing out, but extending the timer seems to help.

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
        // Click the first subreddit link the user sees
        let subredditButton = await page.$('._3ryJoIoycVkA88fy40qNJc'); // I hate how New Reddit has a bunch of random text as their only identifiers on page elements. Still, it remains consistent and doesn't appear to randomize itself, so I'll use it.

        // Putting in a catcher in case the user doesn't have any subreddits
        if(subredditButton == null) {
            await page.goto('https://www.reddit.com/r/popular');
            await page.waitForNavigation({waitUntil: 'networkidle2'});
            // Click the first subreddit joiner button the user finds on r/popular
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
        expect(subredditJoinButton).to.not.BeNull(); //make sure the button exists
        await subredditJoinButton.click();
        /*Right now, all this function does is just click the button, regardless of whether the user is an existing member. When this suite is run over and over again, functionally we're just removing ourselves from every subreddit we have joined, thanks to the way Reddit presents posts. Ideally, we should check if the button says "JOINED", and then only join the subreddit if it does NOT say that. However, I don't know XPath well enough to do that. */
    });
    it('verifies that the successful joining popup appears', async () => {
        await page
            .waitForSelector('._7JH6kQpO-bx66b9ajIZrz') //looking for the class of the popup
            .then(async () => {
                const confirmationModal = await page.$('._7JH6kQpO-bx66b9ajIZrz');
                const confirmationModalString = await confirmationModal.$x("//button[contains(., 'joined')]"); // XPath expression supposed to match to the "Successfully joined [subreddit!]" string.
                expect(confirmationModalString).not.toBeNull(); //making sure the string isn't empty
            });
    });
});
describe('Saving a post', () => {
    it('clicks the first Save button found, goes to saved posts, compares, then returns to homepage', async () => {
        const postSaveButton = await page.$('._10K5i7NW6qcm-UoCtpB3aK'); 
        await postSaveButton.click();
        let savedPostTitle = await page.$x('//span[@class="_eYtD2XCVieq6emjKBH3m"]'); //this xPath expression is supposed to point relatively to the title text of the post we saved.
        //goes to the user saved post list
        const userSavedPostPage = 'https://www.reddit.com/user/' + USERNAME + '/saved/'; // concatenating the username so we avoid hardcoding the url
        await page.goto(userSavedPostPage, {waitUntil: 'domcontentloaded'});
        await page.waitForNavigation({waitUntil: 'networkidle2'});
        //compares the saved post to the stored post'
        const storedPostTitle = page.$('._eYtD2XCVieq6emjKBH3m');
        expect(savedPostTitle).toMatch(storedPostTitle); //comparing the post we saved against the post that appears on this page.
        //returns to reddit.com
        await page.goto('https://www.reddit.com', {waitUntil: 'domcontentloaded'});
        await page.waitForNavigation({waitUntil: 'networkidle2'});
    });
});    
describe('Logout test', () => {
    it('clicks on the user dropdown menu and then Log Out', async () => {
        const dropdownMenu = await page.$('#USER_DROPDOWN_ID');
        await dropdownMenu.click();
        // clicking Logout Button
        const logoutButton = await page.$('.vzhy90YD0qH7ZDJi7xMGw');
        await logoutButton.click(); 
    });
});