```
{
    name: 'zerocho',
    age: 27,
    password: 'babo'
}
```

```
{
    type:'CHANGE_NICKNAME',
    data:'boogicho'
}
```

dispatch
reducer

```
    switch (action.type){
        case 'CHANGE_NICKNAME':
        return{
            ...state,
            name: action.data,
        }
    }
    case 'CHANGE_AGE':
        return {
            ...state,
            age:action.data
        }
```

```
    const nest = { b: 'c'};
    const prev = { a: nest};
    const next = { ...prev };

    prev.a === next.a
    //true
    prev === next
    //false
```

```

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NICKNAME':
            return {
                ...state,
                name: action.data,
            }
    }
}
```

리듀서는 함수인데 이전상태와 액션을 통해서 다음상태를 만드는 것
옛날상태에서 액션에 따라서 데이터를 바꿔서 다음상태를 리턴해줌
축소해서 ~
useSelector는 react-redux입니다.
import {useSelector} from "react-redux";
`npm i react-redux`
리액트 리덕스 설치 > 리액트와 리덕스를 연결시켜주기위해

```
    default:
      return state;
```

switch문에는 꼭 넣어주자..........!!!!!!!

```
    const configureStore = () => {
  const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware([]))
  : compose(applyMiddleware([]))
  const store = createStore(reducer, enhancer);
  return store;
};
```

하고난다음
`npm i redux-devtools-extension`
설치 해야됨 이게 있어야 브라우저확장이랑 연동이됨.

개발용일때는
import { composeWithDevTools } from "redux-devtools-extension";
? compose(applyMiddleware([]))
: compose(applyMiddleware([]));
위에 줄을
`: composeWithDevTools(applyMiddleware([]))`
개발용으로 이렇게 바꿔줘야지 히스토리가 안쌓이기때문에 사용!
