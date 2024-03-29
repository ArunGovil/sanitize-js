export function sanitize(email, customRegex) {
  if (!email) return "";
  let sanitized = email.trim();

  // Apply custom regex
  if (customRegex) {
    sanitized = sanitized.replace(customRegex, "");
  }

  // Function to remove multiple occurace of @
  function removeAt(mail) {
    const lastIndex = mail.lastIndexOf("@");
    let formattedMail = "";
    for (let i = 0; i < mail.length; i++) {
      if (mail[i] === "@" && i !== lastIndex) {
        continue;
      }
      formattedMail += mail[i];
    }
    return formattedMail;
  }

  // Sanitize special characters
  sanitized = sanitized.replace(/[^a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-@]/g, "");
  // Remove consecutive dots
  sanitized = sanitized.replace(/\.{2,}/g, ".");
  // Remove multiple occurance of @ except the last one
  sanitized = removeAt(sanitized);
  return sanitized;
}

export default sanitize;
