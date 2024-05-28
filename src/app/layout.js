import Link from "next/link";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body>
        <div>
          <Link href="/">BOOO1</Link>
          <Link href="/new">BOOOO2</Link>
        </div>
          <main>{children}</main>
        </body>
    </html>
  );
}
