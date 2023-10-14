import { useState } from "react";
import { quotes } from "../../utility/sources";
import "../../styles/Quote.css";

export default function Quote() {
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)],
  );
  const { entry, author } = quote;

  return (
    <div className="quote-wrap flex flex-col text-2xl">
      <q data-author={author}>{entry}</q>
    </div>
  );
}
