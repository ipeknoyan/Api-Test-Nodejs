 # Api-Test-Nodejs
 This project tests sending http GET request to target url { http://ptsv2.com/t/fu807-1554722621/post } and read response body and Sending a POST request to targetUrl and credentials which received by getting the http://ptsv2.com/t/fu807-1554722621/post api. It includes 2 test suits and 8 test cases.
 
# Technology & Stack
 I used Mocha, chai and supertest libararies and devloped the test case with Javascript.Mocha is one of the better-known JavaScript testing frameworks it allows you to write your tests in different styles like BDD and TDD. Mocha fits in nicely with SuperTest, helping you organize your tests in your preferred way.Chai is an assertion library that you can pair with other testing frameworks like Mocha. Chai provides a more expressive and readable style for your tests.SuperTest provides a high-level abstraction for testing HTTP requests - perfect for APIs. If you have a Node.js application that runs an HTTP server (like an Express application), you can make requests using SuperTest directly without needing a running server. One of the nice things about SuperTest is that while it can run tests without any additional tools, it can integrate nicely with other testing frameworks like Mocha and chai.
 
 # Installation & Run
 **Prerequisites**
 
 Nodejs v16.15.1
 
 Execute **npm install** to install packages
 
 Execute **npx test** test to run the tests
 
# Next Possible Steps for Improvements
 * Reports can be custimized according to requirements.
 * Test scenarios can be integrated with Jenkins to create a CI/CD pipeline. 
