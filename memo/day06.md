polyfill.io

hashtag user 똑같음.

`npm i swr`
swr는 서버사이드 랜더링도 됨!

`npm i moment`
post card
날짜 라이브러리
`https://www.npmtrends.com/luxon-vs-moment-vs-dayjs`
트렌드 확인가능.
`momentjs.com` 포맷 확인가능
보통 모멘텀 쓰면 좋음 70키로바이트
date-fns 사용하는이유가 불변성때문에 17.9키로바이트
dayjs으로 넘어가는이유가 용량때문에 인기 급상승 2.8키로바이트

보통 코드를 바꾸면 깃허브에 푸쉬를 함
cicd로그 코드 텍스트, 빌드 해줌 중간에 에러있으면 알림으로 날려줌.
깃허브랑 연결해주면좋음.
다 통과되면 aws랑 연결해줌

`nextjs.org` site
에서
서버페이지가 에러났을때
pages/\_error.js 이렇게 만들고
거기다가 코드 사이트에서 보고 넣으면됨.
에러내용을 보여주면안되고
"잠시후 이동하세요 " 라던지 "고객센터에 전화해주세요 "
에러페이지는 보안을위해서 노출되지않게.

`npm i @next/bundle-analyzer`
웹팩
그거 검사했을때 이상하게나오는거 보게편하게
`npm i cross-env`
패키지제이슨에 빌드에 명령. 윈도우는 적용 안됨 그래서 설치.\
리눅스나 맥은 가능.
