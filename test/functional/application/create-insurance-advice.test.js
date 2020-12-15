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

  it('Should provide insurance advice without ineligibilities', async () => {
    const result = await request(activeServer)
      .post('/insurance-advisor/insurance-advice')
      .send({
        age: 35,
        dependents: 0,
        house: { ownership_status: 'mortgaged' },
        income: 300000,
        marital_status: 'single',
        risk_questions: [1, 0, 1],
        vehicle: { year: 2000 },
      });

    const responseBody = {
      auto: 'economic',
      disability: 'regular',
      home: 'regular',
      life: 'economic',
    };

    expect(JSON.parse(result.text)).toEqual(responseBody);
    expect(JSON.parse(result.status))
      .toEqual(httpStatus.OK);
  });

  it('Should provide insurance advice with all ineligibilities', async () => {
    const result = await request(activeServer)
      .post('/insurance-advisor/insurance-advice')
      .send({
        age: 60,
        dependents: 2,
        income: 0,
        marital_status: 'single',
        risk_questions: [1, 0, 0],
      });

    const responseBody = {
      auto: 'ineligible',
      disability: 'ineligible',
      home: 'ineligible',
      life: 'ineligible',
    };

    expect(JSON.parse(result.text)).toEqual(responseBody);
    expect(JSON.parse(result.status))
      .toEqual(httpStatus.OK);
  });

  it('Should provide insurance advice with both eligible and ineligible lines', async () => {
    const result = await request(activeServer)
      .post('/insurance-advisor/insurance-advice')
      .send({
        age: 35,
        dependents: 2,
        house: { ownership_status: 'mortgaged' },
        income: 0,
        marital_status: 'married',
        risk_questions: [0, 1, 1],
        vehicle: { year: 2000 },
      });

    const responseBody = {
      auto: 'regular',
      disability: 'ineligible',
      home: 'regular',
      life: 'responsible',
    };

    expect(JSON.parse(result.text)).toEqual(responseBody);
    expect(JSON.parse(result.status))
      .toEqual(httpStatus.OK);
  });
});
