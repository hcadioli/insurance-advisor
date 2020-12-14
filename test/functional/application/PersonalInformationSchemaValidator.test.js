const httpStatus = require('http-status-codes');
const supertest = require('supertest');
const server = require('../../../src/application/api/index');

const request = supertest(server);

describe('PersonalInformationSchema', () => {
  afterAll(async () => {
    server.close();
    await new Promise((resolve) => setTimeout(() => {
      resolve();
    }, 500)); // avoid jest open handle error
  });

  it('Should validate schema', async () => {
    console.log(1)
    const result = await request
      .post('/insurance-advisor')
      .send({});

    const errorMessage = {
      message: "should have required property 'age'",
      field: '',
      code: 'INSPER0001',
      status: 422
    };

    expect(result).toEqual(errorMessage);
    expect(result).toEqual(errorMessage);
  });
});
