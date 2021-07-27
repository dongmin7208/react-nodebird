const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
};
export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};
// const initalState = {
//   name: "zerocho",
//   age: 27,
//   password: "babo",
// };

// const changeNickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'boogicho',
// }
//매번 계속 만들어줄수없어서 action creator 로 만들어줌

//async action creator

//action creator
// const changeNickname = (data) => {
//   return {
//     type: "CHANGE_NICKNAME",
//     data,
//   };
// };
// changeNickname("boogicho");

// {
//     type:'CHANGE_NICKNAME',
//     data: 'neue zeal',
// }

// store.dispatch(changeNickname("mighty tak"));

//(이전상태,액션을 통해서) => 다음상태를 만드는거
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
  }
};
