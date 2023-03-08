# 서울시 문화행사 안내 Project

### Page

https://kjindev.github.io/CulturalEventProject/


### Stacks

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=React Query&logoColor=white"/> <img src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=flat-square&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>

### Goals

- TypeScript에 대한 이해
- SVG 형식 파일을 웹페이지에 적용하는 법 이해
- 사용자 맞춤 추천 기능 구현


### Features

- 서울시 문화행사 API를 이용하여 문화행사를 안내해주는 웹사이트입니다.
- 지도를 클릭하면 해당하는 곳의 현재 문화행사 정보를 보여줍니다.
- 반응형 웹페이지로, PC와 모바일 모두에서 웹페이지를 이용할 수 있습니다.


### Details

- 지도 클릭 시 해당 구의 문화행사가 오른쪽에 리스트로 나타납니다.
- 말풍선 버튼을 클릭하면 랜덤으로 문화행사 하나를 추천해줍니다. 동일한 장르의 문화행사를 3번 이상 클릭하면 그 장르에 해당하는 문화행사를 추천해줍니다.


### CORS 에러 해결

- Express로 작은 서버를 만들어 CORS 에러를 해결하였습니다.
- 해당 내용은 https://github.com/kjindev/CulturalEventAPI에 작성되어 있습니다.
