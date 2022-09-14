import supertest from "supertest";
const request= supertest('http://ptsv2.com/');

import { expect, should } from 'chai';

//Create variables
var response;
var data;
var username;
var password;

//This test suit includes GET Cases
describe('Sending GET Request To Get User Info', () => {
    //Request api for each test case
    beforeEach(() => {
        return request.get('t/fu807-1554722621/post').then((res) => {
            console.log("http get is requested");
            const obj = JSON.parse(res.text);
            response = res;
            data= obj;
            username= data.username;
            password= data.password;
        });
	})
 
    //This case checks if GET API is successful
    it('GetRequestIsSuccessful', () => {
        expect(response.status).to.equal(200);
        console.log("Response code is 200");
    });

    //This case checks if response data not null
    it('GetResponseIsNotNull', () => {
        expect(data).to.not.be.null;
        console.log("Response data is not null");
    });

     //This case checks if response data includes "username", "password"and "targetUrl" keys
    it('ValidateKeysOfGetRequest', () => {
        expect(data).to.have.keys(['username',"password","targetUrl"]);
        console.log("Response data includes correct keys");
    });
    
    //This case checks if "username=automate"
    it('ValidateUsername', () => {   
        expect(data.username).to.be.equal('automate');
        console.log("Username is automate");        
    });

     //This case checks if "password=everything"
    it('validatePassword', () => {  
        expect(data.password).to.be.equal('everything');
        console.log("Password is everything");    
    });

 });

 //This test suit includes POST Cases
 describe('Sending POST Request To Get IP and Token', () => {
    //Request api for each test case
    beforeEach(() => {
        return request
             .post('t/7ty82-1554722743/post')
             .auth(username, password).then((res) => {
                console.log("http post is requested");
                const obj = JSON.parse(res.text);
                response = res;
                data= obj;
            });
        
    })

    //This case checks if POST API is successful
    it('PostRequestIsSuccessful', () => {
        expect(response.status).to.equal(200);
        console.log("Response code is 200");
    });

    //This case checks if response data not null
    it('PostResponseIsNotNull', () => {
        expect(data).to.not.be.null;
        console.log("Response data is not null");
    });

    //This case checks if response data includes "ip" and "token" keys
    it('ValidateKeysOfPostRequest', () => {
        expect(data).to.have.keys(['ip','token']);
        console.log("Response data includes correct keys");
    });

 });

