export const validateEmail = email => {
  const regex = new RegExp('^[^@]+@[^@]+.[^@]+$');
  return regex.test(email);
};

export const validateName = name => name.length >= 3;

export const validateEmailConfrim = (email, confirmEmail) => email === confirmEmail;
