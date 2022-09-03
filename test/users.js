import supertest from "supertest";
const request= supertest('http://ptsv2.com/');

import { expect, should } from 'chai';

var response;
var data;
var username;
var password;

describe('http GET Cases', () => {

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
 

    it('GetRequestIsSuccessful', () => {
        expect(response.status).to.equal(200);
        console.log("Response code is 200");
    });

    it('GetResponseIsNotNull', () => {
        expect(data).to.not.be.null;
        console.log("Response data is not null");
    });

    it('ValidateKeysOfGetRequest', () => {
        expect(data).to.have.keys(['username',"password","targetUrl"]);
        console.log("Response data includes correct keys");
    });

    it('ValidateUsername', () => {   
        expect(data.username).to.be.equal('automate');
        console.log("Username is automate");        
    });

    it('validatePassword', () => {  
        expect(data.password).to.be.equal('everything');
        console.log("Password is everything");    
    });

 });

 describe('http POST Cases', () => {

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

    it('PostRequestIsSuccessful', () => {
        expect(response.status).to.equal(200);
        console.log("Response code is 200");
    });

    it('PostResponseIsNotNull', () => {
        expect(data).to.not.be.null;
        console.log("Response data is not null");
    });

    it('ValidateKeysOfPostRequest', () => {
        expect(data).to.have.keys(['ip','token']);
        console.log("Response data includes correct keys");
    });

 });

