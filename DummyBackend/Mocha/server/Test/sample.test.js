const PostMessage = require('../models/postMessage.js')


//clean up the database before and after each test
beforeEach((done) => { 
    PostMessage.deleteMany({}, function(err) {})
    done()
});

afterEach((done) => {
    PostMessage.deleteMany({}, function(err) {})
    done()
});

const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../server');
chai.use(chaiHttp);

describe('User workflow tests', () => {
    
});


