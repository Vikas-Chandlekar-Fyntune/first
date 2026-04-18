import React from "react";
import useCompareQuotes from "./useCompareQuotes";
import type { ISingleQuoteResponseSchema } from "./types";

// Example mock data
const quotesMock: ISingleQuoteResponseSchema[] = [
  { data: { policyId: 101, policyName: "Car Protect Basic", premium: 1200 } },
  { data: { policyId: 102, policyName: "DriveSafe Premium", premium: 1500 } },
  { data: { policyId: 103, policyName: "AutoSecure Gold", premium: 1800 } },
  { data: { policyId: 104, policyName: "SafeRide Ultra", premium: 950 } },
];

const MAX_QUOTES_TO_COMPARE = 2;

const QuotesListView: React.FC = () => {
  const { compareQuotes, toggleCompare, filteredCompareList } =
    useCompareQuotes(quotesMock, {
      maxCompare: MAX_QUOTES_TO_COMPARE,
      onMaxReached: (max, id) => {
        alert(`⚠️ You can only compare ${max} quotes at a time!`);
      },
    });

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>🧾 Available Quotes</h2>

      {quotesMock.map((quote) => {
        const { policyId, policyName, premium } = quote.data;
        const isSelected = compareQuotes.includes(policyId);

        return (
          <div
            key={policyId}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: "12px 16px",
              marginBottom: 10,
              backgroundColor: isSelected ? "#e6f7ff" : "#fff",
              transition: "0.2s ease",
            }}
          >
            <h4>{policyName}</h4>
            <p>Premium: ₹{premium}</p>

            <button
              style={{
                backgroundColor: isSelected ? "#ff7875" : "#1677ff",
                color: "white",
                border: "none",
                borderRadius: 6,
                padding: "6px 12px",
                cursor: "pointer",
              }}
              onClick={() => toggleCompare(policyId)}
            >
              {isSelected ? "Remove from Compare" : "Add to Compare"}
            </button>
          </div>
        );
      })}

      <div style={{ marginTop: 20 }}>
        <h3>🧮 Selected for Comparison ({filteredCompareList.length})</h3>

        {filteredCompareList.length === 0 ? (
          <p>No quotes selected yet.</p>
        ) : (
          <ul>
            {filteredCompareList.map((quote) => (
              <li key={quote.data.policyId}>
                {quote.data.policyName} — ₹{quote.data.premium}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default QuotesListView;
