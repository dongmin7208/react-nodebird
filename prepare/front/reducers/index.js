import { HYDRATE } from "next-redux-wrapper";

import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

const initialState = {
  user: {},
  post: {},
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
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
