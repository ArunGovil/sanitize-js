export function sanitize(customRegex) {
  const email = "a.arin@arn@gmail.com";
  if (!email) return "";
  let sanitized = email.trim();

  if (customRegex) {
    sanitized = sanitized.replace(customRegex, "");
  }

  // Sanitize special characters
  sanitized = sanitized.replace(/[^a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-@]/g, "");
  // Remove consecutive dots
  sanitized = sanitized.replace(/\.{2,}/g, ".");
  // Remove multiple occurance of @
  sanitized = sanitized.replace(/@{2,}/g, "@");
  console.log("San", sanitized);
  return sanitized;
}
