import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCards } from "./cardsSlice";

export default function Card({ id }) {
  const cards = useSelector(selectCards);
  // Retrieve a specific card object from the cards array
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  console.log("Card ID:", id);
  console.log("Card Data:", card);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
