import styled from "@emotion/styled";
export const Container = styled.div({
  display: "flex",
  width: "100%",
  height: "100vh",
  flexDirection: "column",
  overflowY: "auto", // 스크롤 가능하도록 설정
  overflowX: "hidden",
});

export const Main = styled.main({
  paddingLeft: "5vw",
  paddingRight: "5vw",
  paddingTop: "3.908vh",
  paddingBottom: "3.908vh",
  background: "#000",
  "@media (max-width: 768px)": {
    paddingLeft: "5.12vw",
    paddingRight: "5.12vw",
  },
});

export const Top = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "2%",
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
});

export const Title = styled.h1`
  font-family: KoddiUDOnGothic, sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: var(--purple);
  text-align: center;
`;

export const BacktoDepartmentWrap = styled.div({
  width: "fit-content",
  "@media (max-width: 768px)": {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
  },
});

export const BacktoDepartment = styled.div({
  height: "40px",
  padding: "5px 20px 10px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50px",
  backgroundColor: "var(--dark-gray)",
  flex: "0 1 auto",
  "@media (max-width: 768px)": {
    width: "fit-content",
    fontSize: "14px",
    padding: "2px 10px 5px 10px",
  },
});
export const DeptName = styled.span`
  color: var(--white);
  padding-left: 15px;
  font-family: godorounded, sans-serif;
  font-size: 26px;
  font-weight: 400;
`;
export const Placeholder = styled.div({
  height: "60px",
  width: "200px",
  backgroundColor: "transparent",
  flex: "0 1 auto",
  "@media (max-width: 768px)": {
    display: "none",
  },
});

export const Middle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImagesWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  flex-direction: row;
  gap: 30px;
  flex-wrap: wrap;
  //width: fit-content;
`;

export const Image = styled.img({
  width: "100%",
  borderRadius: "20px",
  backdropFilter: "blur(50px)",
  "@media (max-width: 768px)": {
    borderRadius: "10px",
  },
});

export const ImageDescriptions = styled.div`
  font-family: KoddiUDOnGothic, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: white;
`;

export const DetailWrap = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "40%",
  marginLeft: "2%",
  "@media (max-width: 768px)": {
    borderRadius: "10px",
    display: "none",
  },
});

export const DetailComponent = styled.div({
  height: "fit-content",
  padding: "20px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  backgroundColor: `#A348F699`,
  borderRadius: "20px",
  gap: `10px`,
  "@media (max-width: 768px)": {
    borderRadius: "10px",
  },
});

export const Artist = styled.div`
  color: var(--white);
  font-family: KoddiUDOnGothic, sans-serif;
  font-size: 20px;
  font-weight: 700;
`;

export const Description = styled.div`
  color: var(--white);
  font-family: KoddiUDOnGothic, sans-serif;
  font-weight: 400;
  font-size: 11px;
`;

export const PricingComponent = styled.div({
  height: "fit-content",
  marginTop: "20px",
  padding: "20px 20px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: `#90909099`,
  borderRadius: "20px",
  gap: `10px`,
  "@media (max-width: 768px)": {
    borderRadius: "10px",
  },
});

export const SellStatus = styled.div`
  color: var(--white);
  font-family: KoddiUDOnGothic, sans-serif;
  font-size: 20px;
  font-weight: 700;
`;

export const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-family: KoddiUDOnGothic, sans-serif;
  font-size: 13px;
`;

export const Price = styled.div((props) => ({
  color: props.color,
}));

export const ButtonsWrap = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

export const PurchaseButton = styled.div((props) => ({
  color: props.color,
  border: "2px solid #A348F6",
  borderRadius: "10px",
  width: "100%",
  textAlign: `center`,
  padding: `10px 0`,
  fontFamily: "KoddiUDOnGothic",
  fontSize: "13px",
  fontWeight: "700",
  backgroundColor: props.bgColor,
}));

/*-----------------모바일 관련 컴포넌트들----------------*/

export const FloatingWrapper = styled.div((props) => ({
  position: "fixed",
  top: props.top || "50%", // Dynamic top position from props
  right: "-260px", // Start off-screen to the right, peeking slightly
  transform: "translateY(-50%)", // Center vertically without affecting horizontal position
  width: "250px",
  height: "fit-content",
  backgroundColor: props.color, // Adjust color based on props
  borderRadius: "15px",
  padding: "20px",
  color: "white",
  display: "none",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  transition: "right 0.3s ease-in-out", // Smooth transition for sliding effect
  cursor: "pointer",
  zIndex: 20,

  "&.active": {
    right: "50%", // Move to the center horizontally when active
    transform: "translate(50%, -50%)", // Center horizontally and vertically
  },

  "@media (max-width: 768px)": {
    display: "flex",
  },
}));

export const Overlay = styled.div((props) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  opacity: props.isVisible ? 1 : 0, // Opacity transition
  transition: "opacity 0.3s ease", // Fade-in/out transition
  visibility: props.isVisible ? "visible" : "hidden", // Prevents interaction when invisible
  zIndex: 10,
}));

export const Tooltip = styled.div((props) => ({
  position: "absolute", // Position absolutely within the container
  top: props.top || "50%",
  right: "-270px", // Start off-screen to the right, peeking slightly
  transform: "translateY(-50%)",
  backgroundColor: "rgba(128, 128, 128, 0.6)", // Semi-transparent background
  color: "white",
  padding: "8px 12px",
  borderRadius: "8px",
  fontSize: "14px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  opacity: props.isActive ? 0 : 1, // Fade out when modal is active
  visibility: props.isActive ? "hidden" : "visible", // Hide tooltip when modal is active
  transition: "opacity 0.3s ease, visibility 0.3s ease", // Smooth transition for fading effect
  zIndex: 15, // Ensure it’s behind the modal
  backdropFilter: "blur(5px)", // Apply blur effect to the background
}));
