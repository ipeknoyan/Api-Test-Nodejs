import supertest from "supertest";
const request= supertest('http://ptsv2.com/t/fu807-1554722621');

import { expect, should } from 'chai';

var response;
var data;

describe('http GET Cases', () => {

    beforeEach(() => {
        return request.get('/post').then((res) => {
            console.log("http get is requested");
            const obj = JSON.parse(res.text);
            response = res;
            data= obj;
        });
	})
 

    it('GetRequestSuccessfully', () => {
        expect(response.status).to.equal(200);
        console.log("Response code is 200");
    });

    it('GetData', () => {
        response.body = JSON.parse(response.text)
        expect(response.body.data).to.not.be.null;
        console.log("Response data is not null");
    });

    it('CheckKeys', () => {
        response.body = JSON.parse(response.text)
        expect(response.body).to.have.keys(['username',"password","targetUrl"]);
        console.log("Response data includes correct keys");
    });

    it('CheckUsername', () => {
        
        expect(data.username).to.be.equal('automate');
        console.log("Username is automate");
        
    });

    it('CheckPassword', () => {
        
        expect(data.password).to.be.equal('everything');
        console.log("Password is everything");
        
    });

 });

