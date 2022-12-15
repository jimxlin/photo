export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>DASHBOARD LAYOUT</h2>
      <div>{children}</div>
    </div>
  );
}
