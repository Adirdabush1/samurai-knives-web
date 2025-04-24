// SearchBar.jsx
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";
import "./Search.css";

const SearchBar = () => {
  const [queryText, setQueryText] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!queryText.trim()) return;

    try {
      const q = query(
        collection(db, "products"),
        where("name", ">=", queryText),
        where("name", "<=", queryText + "\uf8ff")
      );
      const querySnapshot = await getDocs(q);

      const searchResults = [];
      querySnapshot.forEach((doc) => {
        searchResults.push({ id: doc.id, ...doc.data() });
      });

      setResults(searchResults);
    } catch (error) {
      console.error("Error searching Firestore:", error);
    }
  };

  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
        <input
          type="text"
          placeholder="Search product"
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
          className="search-input"
        />
      </div>

      <ul className="search-results">
        {results.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
