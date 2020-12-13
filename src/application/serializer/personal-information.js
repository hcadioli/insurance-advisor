function deserializeSinglePersonalInformation(user) {
    return {
        age: user.age,
        dependents: user.dependents,
        house: user.house,
        income: user.income,
        marital_status: user.married,
        risk_questions: user.risk_questions,
        vehicle: user.vehicle
      }
  };
  
  function deserialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(deserializeSinglePersonalInformation);
    }
    return deserializeSinglePersonalInformation(data);
  }
  
  module.exports = {
    deserialize
  }