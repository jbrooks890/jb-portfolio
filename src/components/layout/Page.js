export default function Page({ title, titled, children, className }) {
  return (
    <main className={`${className ?? ""}`}>
      {titled && <h1>{title}</h1>}
      {children}
    </main>
  );
}
