/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  // empty string
  if (password === "" || typeof password !== 'string') return "weak";
  let count = 0;
  if (password.length >= 8) count++;

  // check upper case;
  let lower = password.toLowerCase();
  if (lower !== password) count++;

  // check for lower case
  let upper = password.toUpperCase();
  if (upper !== password) count++;

  // atleast one number
  let num = Boolean(password.match(/\d/));
  if (num) count++;

  const special = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const spout = password.split('').some(char => special.includes(char));
  if (spout) count++;

  if (count <= 1) return "weak";
  else if (count <= 3) return "medium";
  else if (count == 4) return "strong";
  else return "very strong";

}
