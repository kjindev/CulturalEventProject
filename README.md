# 서울시 문화행사 안내

서울시 문화행사를 안내해주고 추천해주는 웹사이트입니다.

### 배포 Page

https://kjindev.github.io/CulturalEventProject

### 사용 기술

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=React Query&logoColor=white"/> <img src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=flat-square&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>

### 개발 목적

- Typescript에 대한 기본적인 이해 및 React, Redux Toolkit, React Query에 TypeScript 적용
- 프론트엔드 측에서 REST한 방식으로 API를 요청하는 법 이해

### 개발 내용

- 같은 장르의 문화행사 3번 이상 클릭 시, 해당 장르의 문화행사 중 하나 랜덤으로 추천하는 팝업 생성
- REST API 요청으로 관심 행사 서버에 저장, 저장 취소 가능
- PC와 모바일 모두에서 이용할 수 있는 반응형 웹 페이지 제작

### 상세 내용

- 지도 클릭 : 문화행사 확인
  - 지도를 클릭하면 해당 구의 문화행사가 오른쪽에 리스트로 나타나고, 리스트 속 문화행사의 이름을 클릭하면 상세페이지로 이동합니다.
  - src/mainPage/Culture.tsx에 해당 코드가 작성되어 있습니다.
- 문화행사 상세페이지

  - 관심 목록에 추가하기를 클릭하면 해당 문화행사가 관심 목록에 저장됩니다.
    -src/routePage/Detail.tsx에 해당 코드가 작성되어 있습니다.

- 상단의 메뉴 아이콘 : 저장된 관심 목록 확인
  - 관심 목록에 추가한 문화행사를 확인 및 삭제 할 수 있습니다.
  - src/routePage/Menu.tsx에 해당 코드가 작성되어 있습니다.
- 하단의 말풍선 버튼 : 문화행사 추천
  - 말풍선 버튼을 클릭하면 문화행사 중 하나를 랜덤으로 추천해줍니다.
  - 문화행사 리스트에서 동일한 장르의 문화행사를 3번 이상 클릭하면, 그 장르에 해당하는 문화행사 중 하나를 랜덤으로 추천하는 팝업이 나타납니다.
  - src/routePage/Modal.tsx에 해당 코드가 작성되어 있습니다.

### Back-End

- Express로 REST API를 이용하고 CORS 에러를 해결하였습니다.
- 해당 내용은 https://github.com/kjindev/CulturalEvent-Server 에 작성되어 있습니다.
