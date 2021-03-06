import _ from 'lodash';
import { FETCH_POSTS , FETCH_POSTS_MORE }from '../actions';
export default function(state = {}, action) {
	
	switch (action.type) {
	case FETCH_POSTS: 
		return action.payload.data.data;
	case FETCH_POSTS_MORE:
		return [...state,...action.payload.data.data];
		
	default: 
		return state;
	}


}