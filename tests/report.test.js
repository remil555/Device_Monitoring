const request = require('supertest');
const app = require('../src/app');

describe('GET /api/reports', () => {
  it('should return report data', async () => {
    const res = await request(app).get('/api/reports');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('analyticalData');
    expect(res.body).toHaveProperty('uptimeData');
  });
});
