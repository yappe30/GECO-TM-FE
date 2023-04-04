import * as actions from './actionType'
import axios from "axios";
import { gecoTMApi } from "./utils/Services";


export const onGetEmployee = () => {
    return (dispatch) => {
        axios.get(gecoTMApi+"/GetEmployee").then((res) => {
            dispatch(
                ((data) => {
                  return {
                    type: actions.GET_EMPLOYEE_DATA,
                    payload: {
                      httpResponse: data,
                    },
                  };
                })(res.data)
              );
        }).catch((error) => {
            console.log(error);
        })
    }
}
export const onGetTimesheet = () => {
  return (dispatch) => {
      axios.get(gecoTMApi+"/GetTimesheet").then((res) => {
          dispatch(
              ((data) => {
                return {
                  type: actions.GET_TIMESHEET_DATA,
                  payload: {
                    httpResponse: data,
                  },
                };
              })(res.data)
            );
      }).catch((error) => {
          console.log(error);
      })
  }
}

export const onGEtEvent = () => {
  return (dispatch) => {
      axios.get(gecoTMApi+"/GetUpcomingEvent").then((res) => {
          dispatch(
              ((data) => {
                return {
                  type: actions.GET_EVENT_DATA,
                  payload: {
                    httpResponse: data,
                  },
                };
              })(res.data)
            );
      }).catch((error) => {
          console.log(error);
      })
  }
}
export const onGetBlog = () => {
  return (dispatch) => {
      axios.get(gecoTMApi+"/GetBlog").then((res) => {
          dispatch(
              ((data) => {
                return {
                  type: actions.GET_BLOG_DATA,
                  payload: {
                    httpResponse: data,
                  },
                };
              })(res.data)
            );
      }).catch((error) => {
          console.log(error);
      })
  }
}

export const onGetLogin = (username, password) => {
  return (dispatch) => {
      axios.get(gecoTMApi+`/GetWebUser?username=${username}&password=${password}`).then((res) => {
          dispatch(
              ((data) => { 
                //console.log(data.length);
                if(data.length > 0){
                  let userData = {
                    "id": data[0].employee_id,
                    "fullname": data[0].first_name +" "+ data[0].middle_name+" "+ data[0].last_name,
                    "isActive": true
                  }
                  //console.log(userData);
                    sessionStorage.setItem('userData',JSON.stringify(userData));

                    return {
                      type: actions.GET_LOGIN_DATA,
                      payload: data,
                    };
                  
                }

              })(res.data)
            );
          // console.log(res.data);
          //       dispatch({
          //         type: actions.GET_LOGIN_DATA,
          //         payload: res.data,
          //       });
      }).catch((error) => {
          console.log(error);
      })
  }
}


export const onUpdateTimesheet = (id, status) => {
  return (dispatch) => {
      axios.put(gecoTMApi+`/UpdateTimesheet?id=${id}&status=${status}`).then((res) => {
        dispatch(onGetTimesheet())
      }).catch((error) => {
          console.log(error);
      })
  }
}