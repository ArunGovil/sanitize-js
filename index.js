export function useSanitize(email) {
  if (!email) return;
  const sanitized = (email || "")
    .replace(/[^a-zA-Z0-9._-]+/g, ".")
    .replace(/\.+/g, "-")
    .replace(/^\.*|\.*$/g, "");
  return sanitized;
}
