export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhone(phone: string): boolean {
  // Simple validation for Sri Lankan phone numbers: 10 digits starting with 0
  const re = /^0\d{9}$/;
  return re.test(phone);
}
