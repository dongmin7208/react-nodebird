// [ 계속바뀜 ] 가능하게해줌 1,2,3,4, 식으로 늘어남 url주소가 끝에 됨
import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { END } from "redux-saga";
import wrapper from "../../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import { LOAD_POST_REQUEST } from "../../reducers/post";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}번 게시글</div>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    console.log(context);
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_POST_REQUEST,
      data: context.params.id,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Post;
