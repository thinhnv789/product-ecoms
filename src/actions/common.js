import axios from 'axios'

export const getApi = (url, config, actionType, options) => {
  return dispatch => axios.get(url, config).then(res => {
    const result = res.data;
    console.log('result', result)
    if (!result.code) {
      dispatch({
        type: actionType,
        payload: result.data,
        options: options
      })
    } else {
      dispatch({
        type: 'ERROR',
        payload: `API ${url} show message: code ${result.code} - ${result.message}`
      })
    }
    return {code : result.code, message: result.message};
  }).catch(err => {
    dispatch({
      type: 'ERROR',
      payload: `Network error from API: ${url} - ${err}`
    });
    return {code : 504, message: 'Kết nối mạng có vấn đề vui lòng xem lại'};
  });
};