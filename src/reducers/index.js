import { combineReducers } from 'redux';
import PostsReducer from './reducer_post';
import HotgirlReducer from './reducer_hotgirl';
const rootReducer = combineReducers({
  posts: PostsReducer,
  hotgirls: HotgirlReducer
});

export default rootReducer;
