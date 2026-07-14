export const MESSAGES = {
  auth: {
    loginSuccess: 'Welcome back! You have logged in successfully.',
    loginFailed: 'Invalid username, email, or password. Please try again.',
    registerSuccess: 'Account created successfully! Check your inbox for verification email.',
    logoutSuccess: 'You have logged out successfully. Have a nice day!',
  },
  listing: {
    createSuccess: 'Your advertisement was successfully submitted and is under moderation.',
    createFailed: 'Failed to create listing. Please check required fields.',
  },
  db: {
    connectionSuccess: 'PostgreSQL database connection is alive and running.',
    connectionFailed: 'Failed to establish database connection. Check local port 5432 status.',
  },
};
