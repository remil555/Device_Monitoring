const request = require('supertest');
const app = require('../src/app');

describe('GET /api/uptime-data', () => {
  it('should return uptime data', async () => {
    const res = await request(app).get('/api/uptime-data');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
