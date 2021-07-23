SSR [
검색엔진에 나올려면 ssr방식 채택
로딩하는걸 없애길 위해 사용 좋음.
캐싱까지 적용되면 효율적이라 빠름.
next가 ssr을 쉽게해준다.
ssr할때도 cors설정이 필요하다
프론트서버, 백엔드서버 다르기때문.
]

`react`할때 컴포넌트 각각 파일만들때 컴포넌트 폴더 만들어서
넣어서 관리하면됨.
`components`
AppLayout는 원하는대로 마음대로 만드는것

`children` 는 AppLayout 안쪽부분

`import Link from 'next/link';`
해주고 링크 href하면됨

```
    npm i eslint -D
    npm i eslint-plugin-import -D
    npm i eslint-plugin-react -D
    npm i eslint-plugin-react-hooks -D
```

코드 점검
여러명의 코드 규칙을 정해주는것

`.eslintrc`
확장자가없는것
리눅스에서나 맥에서는 숨김파일이 된다는 의미 앞에 .있는건

eslint 설치가 끝이 아니라 vsc연동을 해줘야함
DB SQL
emotion,
Styled Components
npm trends - web site

`npm i antd styled-components @ant-design/icons`

설치 위치 잘못했는데
설치했던 장소에서 그대로 npm uninstall -g npm i antd~
하면 언인스톨됨 명령어 그대로!

```
+ @ant-design/icons@4.6.2
+ styled-components@5.3.0
+ antd@4.16.8

```

`import { Menu } from "antd";`
`import 'antd/dist/antd.css';`

`https://ant.design/docs/react/introduce`
사용방법 doc

`pages/`폴더내
`_app.js`
중복된 import 한번에 만들어줌

app.js는 완전 공통인애들
레이아웃은 일부가 공통인애들

`import Head from 'next/head';`
헤드를 고치고싶을때 방법
공통필요할때 Head 대문자로
`import { Menu, Input, Row, Col } from "antd";`
가로, 세로 그리드 추가!
