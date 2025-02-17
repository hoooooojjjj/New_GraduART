# 개발 컨벤션

## 코드 컨벤션 [<a href="https://velog.io/@bami/Javascript-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98">자바스크립트 코딩 컨벤션</a>, <a href="https://velog.io/@cada/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%83%80%EC%9D%BC-%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%84%A4%EC%9D%B4%EB%B0%8D-%EC%BB%A8%EB%B2%A4%EC%85%98-%ED%8E%B8">자바스크립트 스타일 가이드 - 네이밍 컨벤션 편</a>]

### 1. 명명 규칙

- 대문자와 소문자를 엄격하게 구분한다.
- **_변수명과 함수명은 CamelCase를 따른다. (예. getReady(), colorOfCar)_**
- **_변수의 이름은 명사로 표기한다.(예. count, number)_**
- **_함수의 이름은 동사 또는 동사구문으로 표기한다.(예, findCamera(), getFoo())_**
- 상수명은 대문자의 언더 스코어방식을 이용한다. (예. PI, MAX_VERTEX)
- 이벤트 핸들러 함수는 on으로 시작한다. (예. onClick, onMove)
- **_명명할 때 축약보다는 의미를 알기 쉽게 풀어쓴다._**

### 2. 변수

- 변수 선언에서 <code>var</code> 대신 <code>let</code> 과 <code>const</code> 를 사용한다.
- **_코드가 실행될 때 재할당이 되어야 하는 변수가 아닌 이상
  <code>const</code>를 사용한다._**

## 커밋 컨벤션 [<a href="https://velog.io/@shin6403/Git-git-%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0">Git | git 커밋 컨벤션 설정하기</a>]

### 1. Commit 메시지 구조

- 기본 적인 커밋 메시지 구조는 제목,본문,꼬리말 세가지 파트로 나누고, 각 파트는 빈줄을 두어 구분한다.

```
type : subject

body

footer
```

### 2. Commit Type

- 타입은 태그와 제목으로 구성되고, 태그는 영어로 쓰되 첫 문자는 대문자로 한다.

```
Feat : 새로운 기능 추가
Bug : 버그 발견
Fix : 버그 수정
Docs : 문서 수정
Style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
Refactor : 코드 리펙토링
```

### 3. Subject

- 제목은 최대 50글자가 넘지 않도록 하고 마침표 및 특수기호는 사용하지 않는다.
- 영문으로 표기하는 경우 동사(원형)를 가장 앞에 두고 첫 글자는 대문자로 표기한다.(과거 시제를 사용하지 않는다.)
- 제목은 개조식 구문으로 작성한다. --> 완전한 서술형 문장이 아니라, 간결하고 요점적인 서술을 의미.

```
* Fixed --> Fix
* Added --> Add
* Modified --> Modify
```

### 4. Body

- 본문은 한 줄 당 72자 내로 작성한다.
- 본문 내용은 양에 구애받지 않고 최대한 상세히 작성한다.
- 본문 내용은 어떻게 변경했는지 보다 무엇을 변경했는지 또는 왜 변경했는지를 설명한다.

### 5. footer

- 꼬리말은 optional이고 이슈 트래커 ID를 작성한다.
- 꼬리말은 "유형: #이슈 번호" 형식으로 사용한다.
- 여러 개의 이슈 번호를 적을 때는 쉼표(,)로 구분한다.
- 이슈 트래커 유형은 다음 중 하나를 사용한다.
  - Fixes: 이슈 수정중 (아직 해결되지 않은 경우)
  - Resolves: 이슈를 해결했을 때 사용
  - Ref: 참고할 이슈가 있을 때 사용
  - Related to: 해당 커밋에 관련된 이슈번호 (아직 해결되지 않은 경우)
  - (ex) Fixes: #45 Related to: #34, #23

### 6. 한 커밋에는 한 가지 문제만!

- 추적 가능하게 유지해주기
- 너무 많은 문제를 한 커밋에 담으면 추적하기 어렵다.

### 7. CLI에서 커밋 메시지 여러 줄로 작성하는 방법

<aside>
✅ **쌍따옴표를 닫지 말고 개행하며 작성 → 다 작성한 후에 쌍따옴표를 닫으면 작성 완료**

```bash
git commit -m "FEAT: 회원가입 기능 추가

- 회원가입 기능 추가"
```

</aside>

## PR 컨벤션 [<a href="https://velog.io/@ye-ji/Git-PR-%EC%9E%98-%EC%93%B0%EB%8A%94-%EB%B0%A9%EB%B2%95">Commit Message / PR 잘 쓰는 방법</a>]

```
### PR 타입(하나 이상의 PR 타입을 선택해주세요)
-[] Feat : 새로운 기능 추가
-[] Bug : 버그 발견
-[] Fix : 버그 수정
-[] Docs : 문서 수정
-[] Style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
-[] Refactor : 코드 리펙토링

### 반영 브랜치
ex) feat/login -> dev

### 변경 사항
ex) 로그인 시, 구글 소셜 로그인 기능을 추가했습니다.

### 테스트 결과
ex) 베이스 브랜치에 포함되기 위한 코드는 모두 정상적으로 동작해야 합니다. 결과물에 대한 스크린샷, GIF, 혹은 라이브 데모가 가능하도록 샘플API를 첨부할 수도 있습니다.
```

## 브랜치 전략

### GitHub-flow 전략 [<a href="https://velog.io/@gmlstjq123/Git-Flow-VS-Github-Flow">Git Flow VS Github Flow</a>]

### ✅ 브랜치 종류 : main 브랜치와 feature 브랜치, feature-feat 브랜치를 운용.

- **main** 브랜치는 개발 단계에서 main 역할을 하는 브랜치.
- **feature** 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 main에 merge 후 각 브랜치를 삭제.
- **feature-feat** 브랜치는 feature 브랜치를 여러 명이 개발할 때 각자의 독립적 개발 및 충돌 방지를 위해 사용하고 feature 브랜치에 merge 후 각 브랜치를 삭제.

### 개발 프로세스 :

- ① feature Branch 생성

새로운 기능이나 버그 수정 작업을 수행하기 위해 브랜치를 생성한다.
이 브랜치는 작업의 컨텍스트를 제공하고, 기능의 독립성을 보장한다.

- ② feature-feat Branch 생성

feature Branch를 여러 명이 작업할 때 충돌 방지 및 독립적 개발을 위해 사용한다.

- ③ 로컬에서 Commit 작성

로컬 feature-feat Branch에서 변경 사항을 커밋으로 저장한다.
커밋은 작업의 단위이며, 코드 변경 내용을 기록한다.

- ④ feature Branch로 Pull Request

변경 사항을 feature Branch로 병합하기 위해 풀 리퀘스트를 생성한다.
이를 통해 코드 검토, 토론, 테스트 등을 수행할 수 있다.

- ⑤ 리뷰 및 피드백

풀 리퀘스트를 생성한 후 다른 개발자들이 코드를 검토하고 피드백을 제공한다.
이를 통해 코드 품질을 높이고 버그를 발견하고 수정할 수 있다.

- ⑥ feature Branch로 병합

풀 리퀘스트가 승인되면 변경 사항을 feature Branch로 병합한다.
이를 통해 작업한 내용이 제품의 다른 부분과 통합된다.
이후 feature-feat Branch는 삭제한다.

- ⑦ main Branch로 병합

feature Branch 병합이 완료되면 main Branch로 Pull Request를 보내고 리뷰 및 피드백 후 병합한다.
이후 feature Branch는 삭제한다.

- ⑧ 배포

main에 병합된 변경 사항은 자동 또는 수동으로 배포 프로세스를 시작한다.
배포 단계에서 테스트, 빌드, 배포 작업 등이 수행된다.
