export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "dondon",
      },
      content: "first board , #ハッシュタグ　＃パク",
      Images: [
        {
          src: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1627579196994-bbe08d97f536?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "suga",
          },
          content: "sugawarasang?",
        },
        {
          User: {
            nickname: "sinagawa",
          },
          content: "品川区です",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};
const dummyPost = {
  id: 2,
  content: "dummydata.",
  User: {
    id: 1,
    nickname: "sugasang",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
