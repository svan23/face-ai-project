import React, { useEffect, useState } from "react";

const TopMatches: React.FC = () => {
  const [matches, setMatches] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5001/top-matches", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data from API:", data);
        // Check if the response is an array before updating state
        if (Array.isArray(data)) {
          setMatches(data);
        } else {
          console.error("API response is not an array:", data);
          setMatches([]); // or handle error accordingly
        }
      })
      .catch((err) => console.error("Error fetching top matches:", err));
  }, []);

  return (
    <div>
      <h2>Top Matches</h2>
      {matches.length > 0 ? (
        <ul>
          {matches.map((match) => (
            <li key={match.img}>
              {match.img}: {match.distance}
            </li>
          ))}
        </ul>
      ) : (
        <p>No matches found</p>
      )}
    </div>
  );
};

export default TopMatches;
