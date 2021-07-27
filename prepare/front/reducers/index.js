const initalState = {
  name: "zerocho",
  age: 27,
  password: "babo",
};

// const changeNickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'boogicho',
// }
//매번 계속 만들어줄수없어서 action creator 로 만들어줌

//action creator
const changeNickname = (data) => {
  return {
    type: "CHANGE_NICKNAME",
    data,
  };
};
changeNickname("boogicho");
// {
//     type:'CHANGE_NICKNAME',
//     data: 'neue zeal',
// }

//(이전상태,액션을 통해서) => 다음상태를 만드는거

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NICKNAME":
      return {
        ...state,
        name: action.data,
      };
  }
};
