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
    paddingTop: "6.839vh",
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
    width: "100%"
});

export const Title = styled.h1`
    font-family: KoddiUDOnGothic, sans-serif;
    font-weight: 700;
    font-size: 50px;  
    color: var(--purple);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
`

export const BacktoDepartment = styled.div`
    height: 60px;
    padding: 5px 20px 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: var(--dark-gray);
    flex: 0 1 auto;
`
export const DeptName = styled.span`
    color: var(--white);
    padding-left: 15px;
    font-family: godorounded,sans-serif;
    font-size: 36px;
    font-weight: 400;
`
export const Placeholder = styled.div`
    height: 60px;
    width: 120px;
    background-color: transparent;
    flex: 0 1 auto;
`

export const Middle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`

export const ImagesWrap = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    gap: 30px;
`

export const Image = styled.img((props) => ({
    backgroundImage: props.src,
    maxWidth: `100%`
}));

export const DetailWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 278px;
`