# 서울시 문화행사 안내

서울시립미술관의 전시 정보를 안내해주는 웹사이트입니다.

### 배포 Page

https://kjindev.github.io/CulturalEventProject

### 사용 기술

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=React Query&logoColor=white"/> <img src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=flat-square&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>

### 개발 목적

- Typescript에 대한 기본적인 이해 및 React, Redux Toolkit, React Query에 TypeScript 적용
- 프론트엔드 측에서 REST한 방식으로 API를 요청하는 법 이해

### 개발 내용

- 같은 장르의 문화행사 3번 이상 클릭 시, 해당 장르의 문화행사 중 하나 랜덤으로 추천하는 팝업 생성
  -REST API 요청으로 관심 행사 서버에 저장, 저장 취소 가능
  -PC와 모바일 모두에서 이용할 수 있는 반응형 웹 페이지 제작

### REST API 이용 및 CORS 에러 해결

- Express로 REST API를 이용하고 CORS 에러를 해결하였습니다.
- 해당 내용은 https://github.com/kjindev/CulturalEvent-Server 에 작성되어 있습니다.
