import React, { useEffect, useState } from "react";
import { fakeQuoteFetch } from "./api/fakeQuoteFetch";

const Quotes = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fakeQuoteFetch().then((newQuote) => {
      setQuote(newQuote);
    });
  };

  return (
    <React.Fragment>
      <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
        {quote ? (
          <>
            <blockquote style={{ fontStyle: "italic" }}>{quote.content}</blockquote>
            <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>{quote.author}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <button onClick={fetchQuote}>Fetch Quote</button>
    </React.Fragment>
  );
};

export default Quotes;
