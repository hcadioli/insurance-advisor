function serializeSingleInsuranceAdvice(user) {
  return {
    auto: user.auto,
    disability: user.disability,
    home: user.home,
    life: user.income,
  };
};

function serialize(data) {
  if (!data) {
    throw new Error('Expect data to be not undefined nor null');
  }
  if (Array.isArray(data)) {
    return data.map(serializeSingleInsuranceAdvice);
  }
  return serializeSingleInsuranceAdvice(data);
}

module.exports = {
  serialize
}