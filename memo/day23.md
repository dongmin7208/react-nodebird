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
``
코드 점검
여러명의 코드 규칙을 정해주는것

`.eslintrc`
확장자가없는것
리눅스에서나 맥에서는 숨김파일이 된다는 의미 앞에 .있는건

eslint 설치가 끝이 아니라 vsc연동을 해줘야함
```
