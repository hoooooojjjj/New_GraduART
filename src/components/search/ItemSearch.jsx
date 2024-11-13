import { useState } from "react";
import { SearchInput } from "./ItemSearchStyle";

function ItemSearch({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="작품명 또는 작가명으로 검색"
      />
    </form>
  );
}

export default ItemSearch;
