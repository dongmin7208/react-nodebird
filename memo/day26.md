hook을 쓸수있는 조건이있음.
반복문,조건문,함수 안에서는 안되고
컴포넌트 안에서만 가능

최적화는 배포전에 해도 늦지않다.
미리 최적화 할필요없다.

초보는　 redux가 좋고
react를 좀 다루는 사람들은 mobx가 좋다.

next redux wrapper 좀더 편하게 쓰기위한 라이브러리가있다.

`npm i next - redux-wrapper`
7version install 했음.

`npm i redux`

Provider는 react-redux에 있다.
여기서 알아서 provider로 감싸주는것
한번더 감싸면 중복이되기때문에 안됨.

리덕스는 에러나면 추적이 쉽다
코드 양이 많다

모베스 코드양이 적다
실수하면 찾기힘들다.

contextAPI
비동기를 지원하기 쉽냐 안쉽냐
비동기를 다룰때는 실패에 대비해야함 1.데이터 보내줘. 2.성공해서 받는거. 3.혹시 실패할때.

컴포넌트에서는 별도의 데이터요청 (useEffect,set,get)잘안함.
