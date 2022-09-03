import supertest from "supertest";
const request= supertest('http://ptsv2.com/t/fu807-1554722621');

import { expect } from 'chai';

var axios = require('axios')
var response;

describe('http GET Cases', () => {

    beforeEach(() => {
        return request.get('/post').then((res) => {
            console.log("http get is requested");
            res.body = JSON.parse(res.text)
            response = res;
        });
	})
 

    it('GetData', () => {
        expect(response.body.data).to.not.be.null;
        console.log("Response data is not null");
    });

   
 });

