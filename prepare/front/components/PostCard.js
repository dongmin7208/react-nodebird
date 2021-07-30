import { Button, Card } from "antd";
import React from "react";
import {RetweetOutlined} from '@ant-design';
const PostCard = ({post}) => {
  return (
    <div>
      <Card
        cover={post.Image[0] && <PostImages images={post.images} />}
        actions={[
            <RetweetOutlined
        ]}
        >
        <Image />
        <Content />
        <Button></Button>
      </Card>
      <CommentForm/>
      <Comments />
    </div>
  );
};

export default PostCard;
