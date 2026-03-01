const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
    it('Should return 200 and Pipeline Demosu Calisiyor!', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Pipeline Demosu Calisiyor!');
    });
});
