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

```
const Home = () => {
    const { isLoggedIn} = useSelector((state) => state.user);
    const { mainPosts} = useSelector((state) => state.post);
    return (
        <AppLayout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((post, index) => <PostCard key={index} post={post} />
            </AppLayout>
    );
}
```

글이 변경되니까 키 값으로 index를 쓰면안됨
`{mainPosts.map((post) => <PostCard key={post.id} post={post} />}`
id 더미데이터 만들어놓은거 사용.

오브젝트오브젝트가 떳다는것은 문자열이 객체로 변환되고 있다는것

`// const id = me && me.id;`
`const id = useSelector((state) => state.user.me?.id);`
` const id = me?.id;`

옵셔널 체이닝 optional chaining 연산자`

`const { me } = useSelector((state) => state.user.me?.id);`
`// const { me } = useSelector((state) => state.user.me && state.user.me.id);`
같은거

`npm i @ant-design/icons;`

```
const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
```

true false 전환
