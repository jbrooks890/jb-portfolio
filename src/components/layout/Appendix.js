export default function Appendix({ contents, className }) {
  return (
    <div
      className={`appendix-thing flex flex-col gap-8 rounded-md bg-midnite/10 p-4 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-4 ${
        className ?? ""
      }`.trim()}
    >
      {contents.map(({ name, body }, i) => (
        <div
          key={i}
          className="relative col-span-full flex flex-col border-t border-lite/10 pt-4 mix-blend-lighten md:grid md:grid-cols-subgrid md:border-none md:pt-0 md:mix-blend-normal"
        >
          <div className="absolute top-0 z-10 -translate-y-1/2 self-center bg-black px-4 text-center text-xl font-semibold tracking-wide  hover:text-day md:static md:translate-y-0 md:self-auto md:bg-transparent md:px-0 md:text-right md:before:content-none md:after:content-none">
            {name}
          </div>
          <div className="text-center md:text-left">{body}</div>
        </div>
      ))}
    </div>
  );
}
