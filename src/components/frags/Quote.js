import { useState } from "react";
import { quotes } from "../../utility/sources";
// import "../../styles/Quote.css";
import Markdown from "markdown-to-jsx";

export default function Quote() {
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)],
  );
  const { entry, author } = quote;

  return (
    <q className="relative my-12 w-fit self-center px-8 text-center font-key text-shade md:px-0 md:text-left">
      <div className="pointer-events-none absolute -top-2 left-1/2 z-0 -translate-x-1/2 -translate-y-4 -rotate-6 text-8xl leading-none opacity-25 md:left-0 md:top-0 md:-translate-x-1/3 md:-rotate-12">
        &ldquo;&rdquo;
      </div>
      <Markdown className="text-2xl">{entry}</Markdown>
      <Markdown
        options={{ forceBlock: true }}
        className="mx-auto w-fit text-sm text-sundown md:ml-auto md:mr-0"
      >{`\u2014${author}`}</Markdown>
    </q>
  );
}
