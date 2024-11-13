import styled from "@emotion/styled";

export const DeptContainer = styled.div({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "20px",
  paddingBottom: "120px",
  paddingLeft: "100px",
  "@media (max-width: 768px)": {
    paddingLeft: "30px",
    gap: "20px",
    paddingBottom: "40px",
  },
});

export const DeptTitleContainer = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  cursor: "pointer",
  lineHeight: "100px",
  "@media (max-width: 768px)": {
    gap: "10px",
    lineHeight: "30px",
  },
});

export const DeptCircle = styled.div((props) => ({
  width: "28px",
  height: "28px",
  borderRadius: "9999px",
  border: `3px solid ${props.isSelected ? "var(--purple)" : "var(--white)"}`,
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
  "@media (max-width: 768px)": {
    width: "10px",
    height: "10px",
  },
}));

export const DeptTitle = styled.div((props) => ({
  color: props.isSelected ? "var(--purple)" : "var(--white)",
  fontSize: "80px",
  fontFamily: "godorounded, sans-serif",
  fontWeight: 400,
  lineHeight: "1",
  wordWrap: "break-word",
  display: "inline-block",
  paddingTop: "20px",
  "@media (max-width: 768px)": {
    fontSize: "25px",
    lineHeight: "30px",
    paddingTop: "0px",
  },
}));

export const DeptSubtitle = styled.span({
  color: "var(--light-gray)",
  fontSize: "20px",
  fontFamily: "'KoddiUD OnGothic'",
  fontWeight: 400,
  lineHeight: "1",
  marginLeft: "15px",
  letterSpacing: "0.05em",
  display: "inline-block",
  verticalAlign: "middle",
  "@media (max-width: 768px)": {
    fontSize: "10px",
    marginLeft: "5px",
    lineHeight: "30px",
  },
});

export const ProductListContainer = styled.div({
  maxWidth: "85dvw",
  padding: "0 50px",
  display: "flex",
  gap: "20px",
  overflowX: "auto", // 가로 스크롤 허용
  scrollBehavior: "smooth",
  "&::-webkit-scrollbar": {
    height: "1px", // 스크롤바 높이 조절
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "var(--purple)", // 스크롤바 색상
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "var(--light-gray)", // 스크롤 트랙 색상
  },
  "@media (max-width: 768px)": {
    gap: "10px",
    padding: "0 20px",
  },
});

export const ProductCard = styled.div({
  flex: "0 0 auto",
  width: "273px",
  height: "167px",
  borderRadius: "20px",
  backdropFilter: "blur(100px)",
  backgroundColor: "var(--overlay-fill)",
  "@media (max-width: 768px)": {
    flex: "0 0 calc((100% - 40px) / 3)",
    width: "50px",
    height: "50px",
    borderRadius: "10px",
  },
  img: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover", // 이미지가 카드 크기에 꽉 차도록 설정
  },
});
