import {combineReducers} from 'redux';

import {
  posts
} from './post'
import {
  sliders
} from './home'

const appStore = combineReducers({
  posts,
  sliders
});

export default appStore;
