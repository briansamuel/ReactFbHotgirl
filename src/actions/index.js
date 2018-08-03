import axios from 'axios';
export const FETCH_POSTS = 'fecth_posts';
export const FETCH_POSTS_MORE = 'fecth_posts_more';
export const FETCH_HOTGIRLS = 'fecth_hotgirls';
export const ROOT_URL = 'https://api.vnsexybae.com/public';
const API_KEY = '';

export function fetchHotgirls() {

	const request = axios.get(`${ROOT_URL}/post?offset=20&limit=5${API_KEY}`);
	return {
		type: FETCH_HOTGIRLS,
		payload: request
	};
}

export function fetchPosts() {

	const request = axios.get(`${ROOT_URL}/post?offset=0&limit=9${API_KEY}`);
	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function fetchPostsMore(page) {

	
	var offset = page*9;
	const request = axios.get(`${ROOT_URL}/post?offset=${offset}&limit=9${API_KEY}`);
	return {
		type: FETCH_POSTS_MORE,
		payload: request
	};
}
