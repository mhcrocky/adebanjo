import {Post} from './../interfaces/Post';

export const GET_POSTS = 'GET_POSTS';
export interface GetPostsStateType {
    posts:Post[]
}

interface GetPostActionType{
    type:typeof GET_POSTS;
    payload:Post[]
}

export type PostActionTypes = GetPostActionType;