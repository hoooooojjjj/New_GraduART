# 개발 과정에서 지켜야 할 사항

## 1. 개발 과정 룰

### <strong style="color : red" >절대 main 브랜치에서 작업하지 않도록 주의!!</strong>

#### 주기적으로 로컬에서 브랜치 확인

### 1️⃣ 자신이 **"새로운 브랜치"** 를 판다면(ex. DepartmentDetailpage)

1. 로컬에서 <code>git pull origin main</code>으로 최신 버전 가져오고 `npm install`
2. 로컬에서 <code>git branch DepartmentDetailpage</code>으로 브랜치 생성
3. 로컬에서 <code>git switch DepartmentDetailpage</code>으로 해당 브랜치로 이동
4. 로컬에서 <code>publish branch</code>로 브랜치를 원격 저장소(github)에 올리기
5. 로컬에서 <code>git branch DepartmentDetailpage-Header</code>으로 자신이 만들 기능 브랜치 생성
6. 로컬에서 <code>git switch DepartmentDetailpage-Header</code>으로 자신의 브랜치로 이동
7. 로컬에서 <code>publish branch</code>로 자신의 브랜치를 github에 올리기
8. 로컬에서 작업
9. 수시로 커밋
10. DepartmentDetailpage 브랜치로 PR(팀원 모두 Reviewers,Assignees 설정)

### 2️⃣ **"만들어진 브랜치"** 에 자신이 만들 기능 브랜치를 판다면(ex. DepartmentDetailpage)

1. 로컬에서 <code>git pull origin DepartmentDetailpage</code>으로 최신 버전 가져오고 `npm install`
2. 로컬에서 <code>git branch DepartmentDetailpage-Header</code>으로 브랜치 생성
3. 로컬에서 <code>git switch DepartmentDetailpage-Header</code>으로 해당 브랜치로 이동
4. 로컬에서 <code>publish branch</code>로 브랜치를 원격 저장소(github)에 올리기
5. 로컬에서 작업
6. 수시로 커밋
7. DepartmentDetailpage 브랜치로 PR(팀원 모두 Reviewers,Assignees 설정)

### 3️⃣ **깃허브에서 "만들어진 브랜치"** 를 내 로컬 git과 연동하고 싶다면?(ex. DepartmentDetailpage)

1. <code>git fetch</code>
2. <code>git branch -r</code> 로 원격 저장소에 있는 브랜치를 확인
3. <code>git checkout -b DepartmentDetailpage origin/DepartmentDetailpage</code> 로 원격 브랜치를 로컬로 체크아웃

- 여기서 `DepartmentDetailpage`는 내 로컬에 브랜치를 DepartmentDetailpage로 만들고 👉 `origin/DepartmentDetailpage`는 깃허브에 있는 DepartmentDetailpage를 내 로컬 DepartmentDetailpage브랜치에 연결한다는 의미!

## 2. <code>git pull</code> 이후 npm install?

- <strong>pull 하고 나서 꼭 <code>npm install</code> 기계적으로 해주기.</strong>
  - Why?
  - ⇒ 다른 사람이 개발하다가 설치한 npm 라이브러리는 push 할때 깃허브에 올라가지 않는다.(<code>.gitignore</code> 파일에 <code>node modules</code> 파일이 존재)
  - ⇒ so, pull 할 때 나의 <code>node modules</code> 파일에 라이브러리가 안 들어온다.
  - ⇒ then, <code>npm install</code>을 통해서 깃허브에서 pull을 통해 가져온 <a href="https://1000hg.tistory.com/m/47"><code>package.json</code></a>에 있는 라이브러리를 한번 더 쭉 설치해줘야 한다.
  - ⇒ 그러면 다른 사람이 설치한 거 가져와진다.

## 3. 브랜치에 PR 보내기 전

- <strong>feature 브랜치에 개발을 할 때에는 꼭 아래 브랜치 전략에 따라 feature-기능명 브랜치를 따로 파서 작업 하기 </strong>
- <strong>개발할 때는 git commit을 자주 남기기! </strong>
  - 기능 하나마다 하나의 commit은 절대 안됨
  - commit 주기는 최소한 함수 하나 당 한번의 commit
- <strong>개발이 끝나고 스스로 괜찮다고 느끼면 feature-기능명 브랜치에서 feature 브랜치로 PR 보내기 </strong>
- <strong>팀원 모두 코드리뷰를 남긴 후 merge </strong>

## 4. feature 브랜치에서 main 브랜치로 merge

### 이왕이면 유호준이 PR 보내겠음

### 다같이 리뷰 후 merge

## 5. <code>Error</code> 발생 및 해결 안될 시

- 아래 사항 전부 포함해서 알리기
  - 에러 뜬다고 바로 알리지 말고 충분히 고민한 흔적 알려주기. ~~ 부분이 문제인 것 같아서 ~~로 코드를 수정했는데 ~~한 에러가 난다 등.
  - 에러 콘솔 캡쳐 이미지(이왕이면 에러 콘솔 다 보이게)
  - 코드(어디 파일에 어느 줄인지)
  - 뭐하다 안된 건지, 어떤 커밋부터 안됐는지 등 꼭 확인 후 알려주기
