const httpStatus = require('http-status-codes');
const request = require('supertest');
const { server, router, api } = require('../../../src/application/api/server/index');

const mockServer = api(server, router);

let activeServer;

describe('PersonalInformationSchema', () => {
  beforeAll((done) => {
    activeServer = mockServer.listen('3000', () => done());
  });

  afterAll(() => {
    activeServer.close();
  });

  it('Should validate schema', async () => {
    const result = await request(activeServer)
      .post('/insurance-advisor/insurance-advice')
      .send({});

    const errorMessage = {
      message: "should have required property 'age'",
      code: 'INSPER0001',
      status: httpStatus.UNPROCESSABLE_ENTITY
    };

    expect(JSON.parse(result.text)).toEqual(errorMessage);
  });

  it('Should validate schema', async () => {
    const result = await request(activeServer)
      .post('/insurance-advisor/insurance-advice')
      .send({
        age: 1
      });

    const errorMessage = {
      message: "should have required property 'dependents'",
      code: 'INSPER0001',
      status: httpStatus.UNPROCESSABLE_ENTITY
    };

    expect(JSON.parse(result.text)).toEqual(errorMessage);
  });

  it('Should validate schema', async () => {
    const result = await request(activeServer)
      .post('/insurance-advisor/insurance-advice')
      .send({
        age: 25,
        dependents: 1,
        income: 200,
        marital_status: 'single',
        risk_questions: [1],
      });

    const errorMessage = {
      message: 'should NOT have fewer than 3 items',
      code: 'INSPER0001',
      status: httpStatus.UNPROCESSABLE_ENTITY,
      field: 'risk_questions'
    };

    expect(JSON.parse(result.text)).toEqual(errorMessage);
  });
});
