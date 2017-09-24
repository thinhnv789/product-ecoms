import { ActionTypes } from './types'
import { getApi } from './common'
import { 
  API_CONFIG 
} from './../apis/config'

import { apisRequest } from './../apis/apisRequest'

const getPostList = () => {
  let url = apisRequest.GET_POST_LIST.url;
  let NEW_API_CONFIG = Object.assign({}, API_CONFIG);
  return getApi(url, NEW_API_CONFIG, ActionTypes.GET_POST_LIST);
};

export const postActions = {
  getPostList: (data = {}) => getPostList()
};