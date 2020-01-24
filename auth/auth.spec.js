const request = require("supertest");
const auth = require('./auth-router.js');
const jokes = require('../jokes/jokes-router.js')

describe('POST /register', function() {
    it('should return a 201', function() {
        return request(auth)
        .post('/register', {
            username: "Snowman",
            password: "pass"
        })
        .then(res => {
            expect(res.status).toBe(201)
        });
    });
    it('should return JSON', function() {
        return request(auth)
        .post('/register', {
            username: "Snowman",
            password: "pass"
        })
        .then(res => {
            expect(res.type).toMatch(/json/i)
        });
    })
});

describe('POST /login', function() {
    it('should return a 200', function() {
        return request(auth)
        .post('/login', {
            username: "user",
            password: "pass"
        })
        .then(res => {
            expect(res.status).toBe(200)
        });
    });
    it('should return JSON', function() {
        return request(auth)
        .post('/login', {
            username: "user",
            password: "pass"
        })
        .then(res => {
            expect(res.type).toMatch(/json/i)
        });
    })
});

describe('GET jokes', function() {
    it('should return a 200', function() {
        const requestOptions = {
            headers: { accept: 'application/json' },
          };
        
        return request(jokes)
        .get('https://icanhazdadjoke.com/search', requestOptions)
        .then(res => {
            expect(res.status).toBe(200)
        });
    });
    it('should return JSON', function() {
        return request(jokes)
        .get('https://icanhazdadjoke.com/search', requestOptions)
        .then(res => {
            expect(res.type).toMatch(/json/i)
        });
    })
});

