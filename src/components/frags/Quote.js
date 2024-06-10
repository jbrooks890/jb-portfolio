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
    <q className="relative my-12 w-fit self-center font-key text-shade">
      <Markdown className="text-2xl">{entry}</Markdown>
      <Markdown
        options={{ forceBlock: true }}
        className="ml-auto w-fit text-sm text-sundown"
      >{`\u2014${author}`}</Markdown>
    </q>
  );
}
