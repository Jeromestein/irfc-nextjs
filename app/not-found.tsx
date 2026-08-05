import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>This page has moved.</h1>
      <p>Let us help you find the information or care you were looking for.</p>
      <Link href="/" className="button button-primary">Return home</Link>
    </main>
  );
}
