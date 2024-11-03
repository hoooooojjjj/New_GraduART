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
        flexDirection:'column'
    }
});

export const Title = styled.h1`
    font-family: KoddiUDOnGothic, sans-serif;
    font-weight: 700;
    font-size: 40px;  
    color: var(--purple);
    text-align: center;
`

export const BacktoDepartmentWrap =styled.div({
   width: "fit-content",
    "@media (max-width: 768px)": {
       display: "flex",
       width: '100%',
        alignItems: "flex-start"
    }
});

export const BacktoDepartment = styled.div({
    height: '40px',
    padding: '5px 20px 10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50px',
    backgroundColor: 'var(--dark-gray)',
    flex: '0 1 auto',
    '@media (max-width: 768px)': {
        width: 'fit-content',
        fontSize: '14px'
    }
});
export const DeptName = styled.span`
    color: var(--white);
    padding-left: 15px;
    font-family: godorounded,sans-serif;
    font-size: 26px;
    font-weight: 400;
`
export const Placeholder = styled.div({
    height: '60px',
    width: '200px',
    backgroundColor: 'transparent',
    flex: '0 1 auto',
    "@media (max-width: 768px)": {
        display: 'none'
    }
});

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

export const ImageDescriptions = styled.div`
    font-family: KoddiUDOnGothic,sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: white;
`

export const DetailWrap = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '40%',
    marginLeft: '2%',
    "@media (max-width: 768px)": {
        borderRadius: "10px",
        display: 'none'
    }
})


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

export const ButtonsWrap = styled.div`
    margin-top: 10px;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 5px;
    align-items: center;
`

export const PurchaseButton = styled.div(props => ({
    color: props.color,
    border: '2px solid #A348F6',
    borderRadius:'10px',
    width: '100%',
    textAlign: `center`,
    padding: `10px 0`,
    fontFamily: 'KoddiUDOnGothic',
    fontSize: '13px',
    fontWeight: '700',
    backgroundColor: props.bgColor
}));