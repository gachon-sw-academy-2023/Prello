# 🗓️ Prello

**Prello**는 Trello를 벤치마킹한 일정 관리 서비스입니다 <br/><br/>

# **What's Included?**

## Features

• ⚡ [React](https://ko.reactjs.org/) for Static Site Generator

• 🔥 Type checking [TypeScript](https://www.typescriptlang.org/)

• ✅ Strict Mode for TypeScript and React 18

• 💖 Code Formatter with [Prettier](https://prettier.io/) and [Eslint](https://eslint.org/)

• 🦊 Husky for Git Hooks

• 🚓 Lint git commit with Commitlint

• 🦺 Unit Testing with Jest

• 🧪 E2E Testing with Cypress

• ✔️ Build with [Vite](https://vitejs.dev/)

• 👩‍🎤 Writing css styles with JavaScript with [Emotion](https://emotion.sh/docs/introduction)

• 📖 Frontend workshop for building UI components and pages in isolation with [Storybook](https://storybook.js.org/)

•  🤓 API mocking of the next generation with [MSW](https://mswjs.io/)

## Version

```json
"typescript": "^4.9.3",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"storybook": "^6.5.15",
"@emotion/styled": "^11.10.5",
"emotion-reset": "^3.0.1",
"jest": "^29.3.1",
"msw": "^0.49.2",
"prettier": "^2.8.1",
"vite": "^4.0.0"
"eslint": "^8.31.0",
"husky": "^8.0.3"
```

## Structure

```bash
.
├── README.md                       
├── .github                         
├── .husky                          
├── .storybook                      
├── .vscode                         
├── public                          
│   ├── mockServiceWorker          
├── src
│   ├── assets                     
│   ├── static                     
│   ├── components                   
│   ├── mocks                       
│   ├── tests                    
│   ├── pages                       
│   ├── styles                      
│   └── utils                       
│   └── App.tsx                       
├── index.html              
├── .eslintrc.cjs             
├── .commitlintrc.json             
├── .prettierrc.cjs             
├── .babel.config.js             
├── vite.config.ts              
├── jest.config.json           
├── tsconfig.json          
├── tsconfig.node.json           
├── package.json             
└── package-lock.json                  
```
<br/>

# Getting Started

### Clone the repo

```bash
git clone https://github.com/gacheon-sw-academy-2023/Prello.git
```

### Install

Install all dependencies

```bash
cd prello
npm install # 필요한 패키지 설치
```

### Running in dev mode

```bash
npm run dev # 개발 모드로 실행
```

✅  Open [http://localhost:5173](http://localhost:5173/) with your browser to see the result.

## Commands

- `npm run dev` : 애플리케이션 `http://127.0.0.1:5173/` 에서 실행
- `npm run build` : 빌드
- `npm run preview` : 빌드된 앱을 로컬에서 테스트
- `npm test` : jest 실행
- `npm run stroybook` : storybook `localhost:6006` 에서 실행

<br/>

# Convention
## commit message rule
|Tag|Contents|remarks|
|---|---|---|
|`feat`|새로운 기능 추가||
|`fix`|버그 수정||
|`docs`|문서 및 주석 수정||
|`refactor`|프로덕션 코드 리팩토링||
|`chore`|설정 파일 수정|프로덕션 코드에 변경이 없는 경우|
|`test`|테스트 코드 추가, 테스트 리팩토링|프로덕션 코드에 변경이 없는 경우|
|`style`|오타 수정, 코드 포맷팅|프로덕션 코드에 변경이 없는 경우|
|`design`|css 등 사용자 ui 변경||
- `[tag]: [contents] ([Jira ticket number])`
- 예시: `feat: 로그인 페이지 추가 (PIM-xxxx)`

## branch rule
1. `main` 는 제품으로 출시될 수 있는 브랜치
2. `hotfix` 는 발견한 버그를 수정하는 브랜치
    - `develop` 에서 버그를 발견 → `hotfix` 이동 → 버그 수정 → 다시 `develop` 에 merge
    - `main` 에서 버그를 발견 → `hotfix` 이동 → 버그 수정 → 다시 `main & develop` 에 merge
3.  `release` QA 브랜치 
    - `release` 에서 발견한 버그는 `release` 에서 수정
    - 완료 후, `main & develop` 에 merge
4. `develop` 다음 출시 버전을 개발하는 브랜치
5. `feature` 기능 개발 브랜치
    - `[tag]/[jira ticket number]`
    - 예시: `feat/PIM-22`

