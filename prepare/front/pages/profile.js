import React from "react";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import Head from "next/head";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "dondon" },
    { nickname: "kasimura" },
    { nickname: "ppudul" },
  ];
  const followingList = [
    { nickname: "dondon" },
    { nickname: "kasimura" },
    { nickname: "ppudul" },
  ];
  return (
    <>
      <Head>
        <title>dongmin | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="following list" data={followingList} />
        <FollowList header="followr list" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
