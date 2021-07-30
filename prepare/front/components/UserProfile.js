import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useDispatch } from "react-redux";

import { loginRequestAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(loginRequestAction());
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          ぴいぴい
          <br />0
        </div>,
        <div key="followings">
          follower
          <br />0
        </div>,
        <div key="followings">
          following
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>DM</Avatar>} title="dongmin" />
      <Button onClick={onLogOut}>LogOut</Button>
    </Card>
  );
};

export default UserProfile;
