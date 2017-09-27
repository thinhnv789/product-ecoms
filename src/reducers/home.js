import { ActionTypes } from '../actions/types';

const df_sliders = []
export const sliders = (state = df_sliders, action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_SLIDERS:
      return action.payload
    default:
      return state
  }
};