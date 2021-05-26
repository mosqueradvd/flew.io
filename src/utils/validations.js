export const validateName = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} es requerido`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return "Carácteres inválidos";
  }
  if (fieldValue.trim().length < 3) {
    return `${fieldName} debe ser al menos de 3 caracteres`;
  }
  return null;
};

export const validateEmail = (email) => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }
  if (email.trim() === "") {
    return "El email es requerido";
  }
  return "Por favor ingresa un email válido";
};

export const validateNumber = (number) => {
  if (!number) {
    return "El número es requerido";
  }
};

export const validateAge = (age) => {
  if (!age) {
    return "La edad es requerida";
  }
  if (age < 18) {
    return "Tu edad debe ser al menos 18 años";
  }
  if (age > 99) {
    return "Tu edad debe ser menor a 100 años";
  }
  return null;
};
