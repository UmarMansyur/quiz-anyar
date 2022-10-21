const request = require('supertest');
const app = require('../app.js');

describe('index.function test', () => {
    it('should return 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            jsonapi: {
                version: "1.0"
            },
            meta: {
                author: "Muhammad Umar Mansyur",
                copyright: "2022 ~ BE JavaScript Binar Academy"
            },
        });
    });
});