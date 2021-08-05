멀티파트 사용하기

`npm i multer`
멀터라는 미들웨어 설치

image는 자산이라 잘 안지움
차지하는 비용보다 이미지를 얻는 가치가 더 크기때문에

key를 잘봐야함 백이랑 프론트랑 데이터를 주고 받을때.

업로드 사진파일은 uploads폴더로!
DB에는 그 사진 주소만!
파일은 s3클라우드에다가 올려서 cdm에 캐싱을적용

서비스를 만들때 의외를 생각을 항상 해야함

ssr~
브라우저 -> 백엔드 서버

서버사이드 에서 리퀘스트로 바껴 줄때까지 기다려줄 장치
end

브라우저 -> 백엔드로 데이터를 보낼때 쿠키를 브라우저가 직접 담아서 보내준다.
ssr는 프론트에서 백엔드로 보낸다.

```
{
  accept: 'application/json, text/plain, */*',
  cookie: 'connect.sid=s%3A4rYMnYLkVr23EptSkFglMVdo3IFe_Ufy.k7%2FJ1HKvwiMVzScuzYlE6kH%2ByjrKNfusaXfl%2BlnQxkM',
  'user-agent': 'axios/0.19.2',
  host: 'localhost:3065',
  connection: 'close'
}
```

next 서버사이드랜더링 >

```
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";

    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
```

쿠키를 넣었다가 지웠다가 쿠키가 공유되는문제를 해결했다.

staticProps는 블로그 잘바뀌지않는애들 대부분사용안함. 커머스, 이벤트페이지, 바뀌지않는페이지,
getseversideProps대부분 사용
