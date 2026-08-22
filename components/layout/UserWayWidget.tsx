import Script from "next/script";

export function UserWayWidget() {
  const account = process.env.NEXT_PUBLIC_USERWAY_ACCOUNT;

  if (!account) {
    return null;
  }

  // Icon position (desktop + mobile) is NOT controlled by a script attribute for
  // this loader (cdn.userway.org/widget.js) — a `data-position` attribute here is
  // silently ignored. It's set per-site in the UserWay dashboard instead:
  // manage.userway.org -> your site -> Customize -> "Button Location Mobile".
  return (
    <Script
      src="https://cdn.userway.org/widget.js"
      data-account={account}
      strategy="afterInteractive"
    />
  );
}
