const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;
const MAX_LENGTHS = {
  name: 120,
  email: 254,
  phone: 50,
  reason: 80,
  message: 5_000,
} as const;

export type ContactRequest = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  reason?: unknown;
  message?: unknown;
};

export type ContactDetails = {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
};

function getText(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export function parseContactRequest(
  body: ContactRequest,
): ContactDetails | null {
  const details = {
    name: getText(body.name, MAX_LENGTHS.name),
    email: getText(body.email, MAX_LENGTHS.email),
    phone: getText(body.phone, MAX_LENGTHS.phone),
    reason: getText(body.reason, MAX_LENGTHS.reason),
    message: getText(body.message, MAX_LENGTHS.message),
  };

  return details.name &&
    EMAIL_PATTERN.test(details.email) &&
    details.reason &&
    details.message
    ? details
    : null;
}

function escapeHtml(value: string) {
  // Visitor-provided text must stay text inside the email markup.
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

export function createContactEmail(details: ContactDetails) {
  const content = [
    ["Name", details.name],
    ["Email", details.email],
    ["Phone", details.phone || "Not provided"],
    ["Reason", details.reason],
    ["Message", details.message],
  ] as const;

  return {
    subject: `New contact enquiry from ${details.name}`,
    text: content.map(([label, value]) => `${label}: ${value}`).join("\n\n"),
    html: content
      .map(
        ([label, value]) =>
          `<p><strong>${label}:</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`,
      )
      .join(""),
  };
}
