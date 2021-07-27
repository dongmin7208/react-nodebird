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
