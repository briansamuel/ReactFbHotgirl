import _ from 'lodash';
import { FETCH_HOTGIRLS } from '../actions';
export default function(state = {}, action) {

	switch (action.type) {
	case FETCH_HOTGIRLS:
		return _.mapKeys(action.payload.data.data, 'id')
		console.log(action.payload);
	default: 
		return state;
	}


}