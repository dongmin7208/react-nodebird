// [ 계속바뀜 ] 가능하게해줌 1,2,3,4, 식으로 늘어남 url주소가 끝에 됨
import React from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";
import { END } from "redux-saga";

import axios from "axios";
import { LOAD_USER_POST_REQUEST } from "../../reducers/post";
import { LOAD_POST_REQUEST } from "../../reducers/post";
import wrapper from "../../store/configureStore";
import PostCard from "../../components/PostCard";
import AppLayout from "../../components/AppLayout";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";

//겟 스테틱 폴백 트루할때
// if (router.isFallback) {
//   return <div>로딩중...</div>;
// }

const Post = () => {
  const { singlePost } = useSelector((state) => state.post);
  const router = useRouter();
  const { id } = router.query;

  return (
    <AppLayout>
      <Head>
        <title>
          {singlePost.User.nickname}
          님의 글
        </title>
        <meta name="description" content={singlePost.content} />
        <meta
          property="og:title"
          content={`${singlePost.User.nickname}님의 게시글`}
        />
        <meta property="og:description" content={singlePost.content} />
        <meta
          property="og:image"
          content={
            singlePost.Images[0]
              ? singlePost.Images[0].src
              : "https://nodebird.com/favicon.ico"
          }
        />
        <meta property="og:url" content={`https://nodebird.com/post/${id}`} />
      </Head>
      <PostCard post={singlePost} />
    </AppLayout>
  );
};
//사용자들이 몇개를 만들지 모르는데 제한을 두는역할
//블로그같은
//
// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { id: '1' } },
//       { params: { id: '2' } },
//       { params: { id: '3' } },
//     ],
//     fallback: true,
//   };
// }

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
