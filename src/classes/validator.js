export class Validators {
  isValidEmail(value) {
    const mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailPattern2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const firstValidator = mailPattern.test(value);
    const secondValidator = mailPattern2.test(value);
    const isValid = firstValidator && secondValidator;
    this.email = isValid;
  }

  isValidName(value) {
    const namePattern = /[A-Z][a-z]* [A-Z][a-z]*/;
    const isValid = namePattern.test(value);
    this.name = isValid;
  }

  isValidPassword(value) {
    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{9,16}$/;
    const isValid = passwordPattern.test(value);
    this.password = isValid;
  }
  passwordIsMatch(previousValue, currentValue) {
    const isValid = previousValue === currentValue;
    this.passwordMatch = isValid;
  }

  isValidAllProperties() {
    return this.email && this.name && this.password && this.passwordMatch;
  }
}
