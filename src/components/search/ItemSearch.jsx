import React, { useState } from "react";
import { SearchInput } from "./ItemSearchStyle";
import { Ellipse } from "./SerachOverlayStyle";

function ItemSearch({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center", gap: "10px" }}
    >
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="작품명 또는 작가명으로 검색"
      />
      <Ellipse onClick={handleSubmit}>
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 15.5L11.4563 11.9563M11.4563 11.9563C12.0251 11.3876 12.4763 10.7123 12.7841 9.96918C13.0919 9.22604 13.2504 8.42955 13.2504 7.62518C13.2504 6.82081 13.0919 6.02431 12.7841 5.28117C12.4763 4.53803 12.0251 3.8628 11.4563 3.29402C10.8876 2.72525 10.2123 2.27407 9.46918 1.96625C8.72604 1.65843 7.92955 1.5 7.12518 1.5C6.32081 1.5 5.52431 1.65843 4.78117 1.96625C4.03803 2.27407 3.3628 2.72525 2.79402 3.29402C1.64533 4.44272 1 6.00068 1 7.62518C1 9.24967 1.64533 10.8076 2.79402 11.9563C3.94272 13.105 5.50068 13.7504 7.12518 13.7504C8.74967 13.7504 10.3076 13.105 11.4563 11.9563Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Ellipse>
    </form>
  );
}

export default ItemSearch;
