// [ 계속바뀜 ] 가능하게해줌 1,2,3,4, 식으로 늘어남 url주소가 끝에 됨
import React from "react";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}ban gesi</div>;
};
export default Post;
