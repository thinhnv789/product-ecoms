import { 
  API_DOMAIN
} from './config'

export const apisRequest = {
  /**
   * GET POST LIST
   */
  GET_POST_LIST: {
    url: API_DOMAIN + '/posts',
    method: 'GET'
  },

  /**
   * GET Sliders LIST
   */
  GET_SLIDERS: {
    url: API_DOMAIN + '/sliders',
    method: 'GET'
  }
}