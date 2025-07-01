/**
 * Validates an email address
 * @param {string} email - The email address to validate
 * @returns {boolean} - Whether the email is valid
 */
export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};

/**
 * Validates form data for the waitlist
 * @param {Object} data - Form data
 * @param {string} data.name - User's name
 * @param {string} data.email - User's email
 * @returns {Object} - Validation result
 */
export const validateWaitlistForm = (data) => {
  const errors = {};
  
  if (!data.name || data.name.trim() === '') {
    errors.name = 'Name is required';
  }
  
  if (!data.email || data.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}; 