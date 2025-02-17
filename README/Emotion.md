# Emotion 가이드

### Emotion 공식문서(링크된 페이지)에서 자세한 것은 찾아보도록 한다.

### 👉 <a href="https://emotion.sh/docs/styled">Emotion 공식문서</a>

### 이 서비스에서는 **_styled components_** 방식을 사용한다.

Emotion은 **_css in js_** 방식으로 스타일 코드에서 js 코드를 사용할 수 있어, 굉장히 유연하다.

스타일 컴포넌트의 변수이름은 '꼭' 대문자로 시작해야한다.

### 1. 객체 스타일

```
const {변수이름} = styled.{html태그}({
{객체 형태로 코딩}
})
```

예시 )

```
const Child = styled.div({
  color: 'red',
  fontSize : '20px',
})
```

- 객체 스타일을 사용할 때는 lowerCamelcase 로 속성을 작성해야한다. (font-size X , fontSize O)
- 객체 스타일을 사용할 때는 속성값을 문자열로 작성해야 한다.(red X, 'red' O)

### 2. 문자열 스타일

```
const {변수이름} = styled.{html태그}`
{문자열 형태로 코딩}
`
```

예시 )

```
const Child = styled.div`
  color: red;
  font-size : 20px;
`
```

- 문자열 스타일을 사용할 때는 kebablcase 로 속성을 작성해야한다. (font-size O , fontSize X)
- 문자열 스타일을 사용할 때는 속성값을 문자열로 작성하지 않는다.(red O, 'red' X)

### 3. js 코드 사용 예시

```
const Child = styled.div({
  color: 'red',
  fontSize : `${20+30}px', // '50px'
})
```

```
const width = 100;
const Child = styled.div`
  color: red;
  width : ${width}px // 100px
```

### 4. 컴포넌트에서 props를 전달받을 수 있다.

#### 조건부 스타일링이 편리해진다.

```
// Child 컴포넌트에 color props를 'red'로 전달
<Child/ color={'red'}>
```

```
const Child = styled.div((props)=>({
  color: props.color, // 'red'
  fontSize : `${20+30}px',
}))
```

```
// Child 컴포넌트에 isMain props를 true로 전달
<Child/ isMain={true}>
```

```
const Child = styled.div`
  color: ${props => (props.isMain ? 'hotpink' : 'turquoise')}; // 'hotpink'
  width : ${width}px
```

### 5. Emotion으로 만든 스타일 컴포넌트 사용법

```
import styled from '@emotion/styled'

const Button = styled.button`
  color: ${props => (props.primary ? 'hotpink' : 'turquoise')};
`

const Container = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column'
}))

const App = ()=>{
  return(
  <Container column>
    <Button>This is a regular button.</Button>
    <Button primary>This is a primary button.</Button>
  </Container>
  )
}

export default App;
```

### 애니메이션 사용법

```
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const rotateInVer = keyframes`
  0% {
    transform: perspective(800px) rotateY(-360deg) translateZ(-200px);
    opacity: 0;
  }
  100% {
    transform: perspective(800px) rotateY(0deg) translateZ(0);
    opacity: 1;
  }
`;

export const LogoStyle = styled.p({
  ...Font_Kanit(),
  fontWeight: 500,
  animation: `${rotateInVer} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both infinite`,
  fontSize: 50,
  position: "relative",
});
```
