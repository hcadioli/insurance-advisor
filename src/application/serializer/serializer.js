function serializeSingleBasedOn(referenceModel) {
  return (toBeSerialized) => {
    const domainProperties = Object.keys(referenceModel);

    const serializedData = domainProperties.reduce((result, validProperty) => {
      const serializeName = referenceModel[validProperty]
        .serializeTo || validProperty;

      const incrementedResult = {
        ...result,
        [serializeName]: toBeSerialized[validProperty]
      };

      return incrementedResult;
    }, {});

    return serializedData;
  };
}

function createSerializerBasedOn(referenceModel) {
  const serializeSingle = serializeSingleBasedOn(referenceModel);

  return {
    serialize: (data = {}) => {
      if (Array.isArray(data)) {
        return data.map(serializeSingle);
      }

      return serializeSingle(data);
    }
  };
}

module.exports = {
  createSerializerBasedOn
};
