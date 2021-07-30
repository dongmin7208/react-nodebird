```
 mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "dondon",
      },
      content: "first board , #ハッシュタグ　＃パク",
      Images: [{
          src: '',
      }, {
          src: '',
      }, {
          src:'',
      }],
      Comments: [{

      }]
    },
  ],
};
```

서버 개발자한테 어떤식으로 줄거냐 미리 물어보는것도 좋음
이런식으로 달라고 요청해도좋음.

```
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
      }
    default:
      return state;
  }
};
```

dummyPost 를 앞에다가 추가해줘야지 쭈루룩 나옴
sever개발자와 리덕스의 구조에대해 합의를 봐야함 미리 커뮤니케이션
