`npm i react-slick`
사진 넘기는거 슬라이드

스타일드 컴포트 쓸려면 바벨 설정은 필수..

`npm i redux-thunk`
지연의 의미를 갖고있다
디스패치를 좀 나중에, 한번에 묶어서 해주는것

스크롤이벤트에 비동기요청을 넣어버리면 서버에 요청이 수백개가 가버림 = 도스공격
프론트를 잘못만들면 서버에다가 도스공격을 때릴수가있음 배포하면 디도스가되는거
쓰로틀을 일초에 3번이상 발생하면 차단해버린다 > saga가 구현

`npm rm redux-thunk`
thunk 삭제~

`npm i redux-saga`
설치

saga사용

```
export default function* rootSaga() {
}
```

제너레이터 \*

```
const gen = function* () {
    console.log(1);
    yield;
    console.log(2);
    yield;
    console.log(3);
    yield 4;
}
    const generator = gen();

    generator
    gen {<suspended>}

    generator.next() //입력하면
    1
    {value: undefined, done: false}

    generator.next()
    2
    {value: undefined, done: false}

    generator.next()
    3
    {value: 4, done: false}

    generator.next()
    {value: undefined, done: true}
```

제너레이터는 yield가 있는곳에서 멈춘다 중단점이 있는 함수다
done true가 될때까지
중단하고싶은 점 마다 yield를 넣어주면뎀

```

const gen = function\*() {
while (true) {
yield '무한';
}
}

const g = gen();

g.next() //입력
{ }
```

while true 무한반복문인데
매번 중단됨 saga에서는 조금 다름 계속 종료되
