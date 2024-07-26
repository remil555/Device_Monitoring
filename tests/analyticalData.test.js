const request = require('supertest');
const app = require('../src/app');

describe('GET /api/analytical-data', () => {
  it('should return analytical data', async () => {
    const res = await request(app).get('/api/analytical-data');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });
});
