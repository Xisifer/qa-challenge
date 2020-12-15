QA Coding Challenge, written in JavaScript using Jest, Puppeteer, and Jest-Puppeteer.

To run the test, install dependencies with "npm install" in the node terminal, then enter "npm run test".

This assignment is not fully complete. Several of the tests fail due to me not quite being able to finesse my syntax properly, and having incomplete knowledge of Jest and XPath. I added as many comments as I could to explain thought processes and where things need improvement.

Structurally, the credentials should be in a private .env file instead of a JSON, and sub-test-suites should be broken out into their own files, but I was unable to figure out environment variable handling with Jest, so the JSON became a stopgap measure so I didn't spend too long roadblocked.

----------------------------------------------------------
Original Prompt:
----------------------------------------------------------

# QA Coding Challenge

Test a couple of scenarios in the popular social media website: www.reddit.com

Scenarios we would like to see tested are:
* Logging in
* Saving a post
  * (Bonus) Ensure the post you saved is in your profile
* Joining a subreddit
* Logout

## Functional requirements

* Tests are run against a configurable host, with `www.reddit.com` as the default
* Tests can be configured to run various browser and OS combinations, at a minimum the following should be included
  * Any of Chrome latest, Firefox latest, or Safari latest on Mac OS
* Testing service credentials are passed as environment variables

## Non-functional requirements

* Tests are written in any language you feel comfortable with
* Tests are written against a BDD framework like `jest`
* Tests cases describe expected behavior

## What we're looking for

1. Using high-quality existing libraries or small amounts of custom code
1. Showing your work through your commit history
1. Attention to detail, with well documented code
1. Maintainable tests
1. Pride in craftsmanship
