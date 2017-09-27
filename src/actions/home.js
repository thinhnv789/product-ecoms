import { ActionTypes } from './types'
import { getApi } from './common'
import { 
  API_CONFIG 
} from './../apis/config'

import { apisRequest } from './../apis/apisRequest'

const getSliders = () => {
  let url = apisRequest.GET_SLIDERS.url;
  let NEW_API_CONFIG = Object.assign({}, API_CONFIG);
  return getApi(url, NEW_API_CONFIG, ActionTypes.GET_SLIDERS);
};

export const homeActions = {
  getSliders: (data = {}) => getSliders()
};