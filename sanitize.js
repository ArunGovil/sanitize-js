export function sanitize(email, customRegex) {
  if (!email || typeof email != "string") {
    throw new Error("Email must be a non-empty string.");
  }

  let sanitized = email.toLowerCase().trim();

  // Apply custom regex
  if (customRegex) {
    sanitized = sanitized.replace(customRegex, "");
  }

  // Function to remove multiple occurrence of @
  function removeAt(mail) {
    const lastIndex = mail.lastIndexOf("@");
    let formatted = "";
    for (let i = 0; i < mail.length; i++) {
      if (mail[i] === "@" && i !== lastIndex) {
        continue;
      }
      formatted += mail[i];
    }
    return formatted;
  }

  // Sanitize special characters
  sanitized = sanitized.replace(/[^a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-@]/g, "");
  // Remove consecutive dots
  sanitized = sanitized.replace(/\.{2,}/g, ".");
  // Remove multiple occurrence of @ except the last one
  sanitized = removeAt(sanitized);
  return sanitized;
}

export default sanitize;
