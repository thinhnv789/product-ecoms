import {combineReducers} from 'redux';

import {
  posts
} from './post'

const appStore = combineReducers({
  posts
});

export default appStore;
