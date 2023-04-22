# 서울시 문화행사 안내

서울시 문화행사를 안내해주고 추천해주는 웹사이트입니다.

### 웹 사이트 소개

- 서울시 문화행사를 안내 및 추천하는 웹 사이트입니다.
- 선호하는 장르의 문화행사를 추천받을 수 있으며, 관심 목록에 저장할 수 있습니다.
- PC와 모바일 모두에서 이용할 수 있는 반응형 웹 페이지입니다.
- 배포 Page : [https://kjindev.github.io/CulturalEventProject/](https://kjindev.github.io/CulturalEventProject/)

### 개요

- 개발 인원 : 1인 (개인 프로젝트)
- 개발 기간 : 2023.02. ~ 2023.04.
- 개발 목적 : TypeScript에 대한 이해 및 React, Redux Toolkit, React Query에 TypeScript 적용, 프론트엔드 측에서 REST API 요청하는 법 이해

### 사용 기술

| 기술          | 사용한 이유                                                                                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TypeScript    | JavaScript와 달리, 타입을 지정하여 에러를 사전에 방지할 수 있기 때문에 사용하였습니다.                                                                                |
| React         | 새로고침 없이 부드럽게 페이지가 전환되는 Single Page Application(SPA)로 웹 사이트를 제작하기 위해 사용하였습니다.                                                     |
| Redux Toolkit | 사용자가 선호하는 문화행사를 전역적으로 확인하고 관리하기 위해 사용하였습니다.                                                                                        |
| React Query   | 공공 API 데이터를 편리하게 요청하고 관리하기 위해 사용하였습니다.                                                                                                     |
| Express       | 프론트엔드와 백엔드가 HTTP 메서드로 통신할 수 있도록 Express로 REST API를 작성하였습니다. 또한, CORS 에러를 해결하기 위해 Express의 CORS 라이브러리를 사용하였습니다. |
| Tailwind CSS  | 기존의 CSS보다 효율적이고 반응형 디자인이 간편하다는 장점이 있어 사용하였습니다.                                                                                      |

### Front-End

- **지도 클릭 : 문화행사 확인**
  - 지도를 클릭하면 문화행사가 오른쪽에 리스트로 나타나고, 문화행사의 이름을 클릭하면 상세 페이지로 이동합니다.
  - [src/mainPage/Culture.tsx](https://github.com/kjindev/CulturalEventProject/blob/main/src/mainPage/Culture.tsx)에 해당 코드가 작성되어 있습니다.
- **문화행사 상세페이지**

  - 관심 목록에 추가하기를 클릭하면 해당 문화행사가 관심 목록에 저장됩니다.
  - [src/routePage/Detail.tsx](https://github.com/kjindev/CulturalEventProject/blob/main/src/routePage/Detail.tsx)에 해당 코드가 작성되어 있습니다.

- **상단의 메뉴 아이콘 : 저장된 관심 목록 확인**
  - 관심 목록에 추가한 문화행사를 확인 및 삭제 할 수 있습니다.
  - [src/routePage/Menu.tsx](https://github.com/kjindev/CulturalEventProject/blob/main/src/routePage/Menu.tsx)에 해당 코드가 작성되어 있습니다.
- **하단의 말풍선 버튼 : 문화행사 추천**
  - 말풍선 버튼을 클릭하면 문화행사 중 하나를 랜덤으로 추천해줍니다.
  - 문화행사 리스트에서 동일한 장르의 문화행사를 3번 이상 클릭하면, 그 장르에 해당하는 문화행사 중 하나를 랜덤으로 추천하는 팝업이 나타납니다.
  - [src/routePage/Modal.tsx](https://github.com/kjindev/CulturalEventProject/blob/main/src/routePage/Modal.tsx)에 해당 코드가 작성되어 있습니다.

### Back-End

- **Github** : [https://github.com/kjindev/CulturalEvent-Server](https://github.com/kjindev/CulturalEvent-Server)
- **REST API 요청**
  - Express로 REST API를 작성하여 프론트엔드와 백엔드가 HTTP로 통신할 수 있도록 하였습니다.
- **CORS 에러 해결**
  - 서울시 문화행사의 공공 API를 받아오던 중 CORS 에러가 발생하였습니다.
  - TypeScript와 Express로 API 데이터를 받아오는 서버를 만들고, Express의 CORS 라이브러리를 이용하여 에러를 해결했습니다.

### 개발 과정에서의 문제 해결

- Menu.tsx에서 관심 목록을 삭제하는 기능을 구현할 때, 삭제 버튼이 제대로 기능하지 못하고 서버 측에서 상태 코드 500이 나타나는 문제가 있었습니다. 이는 목록을 새로 불러오는 함수가 목록을 삭제하는 함수의 결과를 기다리지 않고 바로 실행되었기 때문에 발생한 것이었고, 함수 내부의 HTTP 메서드에 async, await를 적용하여 해결했습니다.
- TypeScript로 작성된 Express를 배포하는 과정에서 어려움을 겪었습니다. TypeScript로 작성된 프로젝트는 배포 과정에서 script에 tsc를 작성해야 함을 알게 되었고, script에 작성된 코드의 역할에 대해 이해할 수 있었습니다.
