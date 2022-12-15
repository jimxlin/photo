export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <h1>ROOT LAYOUT</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}
