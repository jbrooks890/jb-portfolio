export default function Page({ title, untitled, children, className }) {
  return (
    <main className={`${className ?? ""}`}>
      {title && !untitled && <h1>{title}</h1>}
      {children}
    </main>
  );
}
