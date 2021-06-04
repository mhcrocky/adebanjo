import {GET_POSTS,GetPostsStateType,PostActionTypes} from './../types/PostTypes';

const initialStateGetPosts: GetPostsStateType = {
    posts: []
  };
  
  export const getPostsReducer = (
    state = initialStateGetPosts,
    action: PostActionTypes
  ): GetPostsStateType => {
    switch (action.type) {
      case GET_POSTS:
        return {
          ...state,
          posts: action.payload
        };
      default:
        return state;
    }
  };