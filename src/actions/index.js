import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPER1234';


export function fetchPosts() {
	const ajaxRequest = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: ajaxRequest
	};
}

export function createPost(values, callback) {
	const ajaxRequest = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
		.then( () => callback() );

	return {
		type: CREATE_POST,
		payload: ajaxRequest
	};
}

export function fetchPost(id) {
	const ajaxRequest = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

	return {
		type: FETCH_POST,
		payload: ajaxRequest
	};
}

export function deletePost(id, callback) {
	const ajaxRequest = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
		.then( () => callback() );

	return {
		type: DELETE_POST,
		payload: id
	}
}