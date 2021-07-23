import react, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  ("");
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
