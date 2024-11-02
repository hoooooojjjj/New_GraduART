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
    width: "100%",
    marginBottom: "2%"
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
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
`

export const ImagesWrap = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
    width: fit-content;
`

export const Image = styled.img({
    width: "100%",
    borderRadius: "20px",
    backdropFilter: "blur(50px)",
    "@media (max-width: 768px)": {
        borderRadius: "10px",
    },
});

export const DetailWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 40%;
    margin-left: 2%;
`

export const DetailComponent = styled.div({
    height: 'fit-content',
    padding: '20px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: `#A348F699`,
    borderRadius: '20px',
    gap: `10px`,
    "@media (max-width: 768px)": {
    borderRadius: "10px",
    }
})

export const Artist = styled.div`
    color: var(--white);
    font-family: KoddiUDOnGothic,sans-serif;
    font-size: 20px;
    font-weight: 700;
`

export const Description = styled.div`
    color: var(--white);
    font-family: KoddiUDOnGothic, sans-serif;
    font-weight: 400;
    font-size: 11px;
`

export const PricingComponent = styled.div({
    height: 'fit-content',
    marginTop: '20px',
    padding: '20px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: `#90909099`,
    borderRadius: '20px',
    gap: `10px`,
    "@media (max-width: 768px)": {
        borderRadius: "10px",
    }
})

export const SellStatus = styled.div`
    color: var(--white);
    font-family: KoddiUDOnGothic,sans-serif;
    font-size: 20px;
    font-weight: 700;
`

export const PriceWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    font-family: KoddiUDOnGothic, sans-serif;
    font-size: 13px;
`

export const Price = styled.div(props => ({
    color: props.color
}));
