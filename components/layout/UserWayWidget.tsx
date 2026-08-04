import Script from "next/script";

export function UserWayWidget() {
  const account = process.env.NEXT_PUBLIC_USERWAY_ACCOUNT;

  if (!account) {
    return null;
  }

  return (
    <Script
      src="https://cdn.userway.org/widget.js"
      data-account={account}
      strategy="afterInteractive"
    />
  );
}
