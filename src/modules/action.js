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

export const onUpdateTimesheet = (id, status) => {
  return (dispatch) => {
      axios.put(gecoTMApi+`/UpdateTimesheet?id=${id}&status=${status}`).then((res) => {
        dispatch(onGetTimesheet())
      }).catch((error) => {
          console.log(error);
      })
  }
}