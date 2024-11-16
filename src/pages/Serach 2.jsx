// import React, { useState } from "react";
// import { DepartmentHeader } from "../components/DepartmentHeader/DepartmentHeader";
// import SearchOverlay from "../components/search/SearchOverlay";
//
// // 임시 데이터 (목 데이터)
// const mockArtworks = [
//   {
//     id: 1,
//     title: "고양이 나무에서 떨어지다",
//     artist: "홍길동",
//     material: "캔버스에 유채",
//     size: "200x300",
//   },
//   {
//     id: 2,
//     title: "파란 하늘",
//     artist: "이몽룡",
//     material: "종이에 수채",
//     size: "100x150",
//   },
//   {
//     id: 3,
//     title: "해바라기",
//     artist: "성춘향",
//     material: "캔버스에 유채",
//     size: "250x350",
//   },
//   {
//     id: 4,
//     title: "바닷가 풍경",
//     artist: "변사또",
//     material: "캔버스에 아크릴",
//     size: "300x400",
//   },
//   {
//     id: 5,
//     title: "겨울 산",
//     artist: "김삿갓",
//     material: "캔버스에 유채",
//     size: "150x200",
//   },
//   {
//     id: 6,
//     title: "붉은 장미",
//     artist: "춘향이",
//     material: "종이에 수채",
//     size: "80x120",
//   },
//   {
//     id: 7,
//     title: "붉은 장미",
//     artist: "춘향이",
//     material: "종이에 수채",
//     size: "80x120",
//   },
//   {
//     id: 8,
//     title: "붉은 장미",
//     artist: "춘향이",
//     material: "종이에 수채",
//     size: "80x120",
//   },
//   {
//     id: 9,
//     title: "붉은 장미",
//     artist: "춘향이",
//     material: "종이에 수채",
//     size: "80x120",
//   },
//   // 추가 데이터 필요 시 더 넣을 수 있음
// ];
//
// const SearchPage = () => {
//   const [isSearchVisible, setIsSearchVisible] = useState(false);
//
//   const handleSearchClick = () => {
//     setIsSearchVisible(!isSearchVisible);
//   };
//
//   return (
//     <div style={{ position: "relative", width: "100%", height: "100vh" }}>
//       {/* 헤더를 고정하여 스크롤 시에도 보이도록 함 */}
//       <DepartmentHeader onSearchClick={handleSearchClick} />
//
//       {/* 검색 오버레이 표시 */}
//       {isSearchVisible && (
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.8)", // 약간 투명한 배경
//             zIndex: 1000,
//           }}
//         >
//           <SearchOverlay artworks={mockArtworks} />
//         </div>
//       )}
//     </div>
//   );
// };
//
// export default SearchPage;
