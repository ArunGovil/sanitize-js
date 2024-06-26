export function sanitize(email, options = {}) {
  if (!email || typeof email != "string") return "";

  const { customRegex = "", isNormalString = false } = options;

  let sanitized = email.toLowerCase().trim();

  // Apply custom regex
  if (customRegex) {
    sanitized = sanitized.replace(customRegex, "");
  }

  // Function to remove multiple occurrence of @ except the last one
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
  // Remove multiple occurrence of @
  sanitized = isNormalString
    ? sanitized.replace(/@/g, "")
    : removeAt(sanitized);
  return sanitized;
}

export default sanitize;
