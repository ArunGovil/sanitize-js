export function sanitize(email, customRegex) {
  if (!email) return "";
  let sanitized = email.trim();

  if (customRegex) {
    sanitized = sanitized.replace(customRegex, "");
  }

  // Sanitize special characters
  sanitized = sanitized.replace(/[^a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-@]/g, "");
  // Remove consecutive dots
  sanitized = sanitized.replace(/\.{2,}/g, ".");
  return sanitized;
}
