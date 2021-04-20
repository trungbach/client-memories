import * as api from '../api';
import * as types from '../constants/actionTypes';
// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({ type: types.FETCH_ALL,payload: data });
    } catch (error) {
        console.log(error.message);
    }
} 

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: types.CREATE_POST, payload: data });
    } catch (error) {
        console.error(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: types.UPDATE_POST, payload: data });

    } catch (error) {
        console.log(error);
    }
}

export const removePost = (id) => async (dispatch) => {
    try {
        await api.removePost(id);
        dispatch({ type: types.REMOVE_POST, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    
    const user = JSON.parse(localStorage.getItem('profile'));
    
    try {
        const { data } = await api.likePost(id, user?.token);
        dispatch({ type: types.LIKE_POST, payload: data });
    } catch (error) {
        console.log(error);
    }
}