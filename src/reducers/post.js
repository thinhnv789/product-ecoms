import { ActionTypes } from '../actions/types';

const df_post_list = []
export const posts = (state = df_post_list, action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_POST_LIST:
      return action.payload
    default:
      return state
  }
};