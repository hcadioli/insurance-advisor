const DefaultError = require('./default-error');

class InvalidFieldError extends DefaultError {
  constructor(message, field, values) {
    super(message);
    this.field = field;
    this.values = values;
  }
}

module.exports = InvalidFieldError;
