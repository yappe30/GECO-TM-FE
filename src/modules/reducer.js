import * as actions from "./actionType";
const initState = {
    employeeData: [],
    timesheetData: [],
    upcomingEventData: [],
    blogData: [],
    userCreds: [],
    isActive: false,
}

export const reducer = (state = initState, action) => {
    //console.log(action.payload);
    switch (action.type) {
        case actions.GET_EMPLOYEE_DATA: 
            return { ...state, employeeData: action.payload.httpResponse }
        case actions.GET_TIMESHEET_DATA:
            return { ...state, timesheetData: action.payload.httpResponse }
        case actions.GET_EVENT_DATA:
            return { ...state, upcomingEventData: action.payload.httpResponse }
        case actions.GET_BLOG_DATA:
            return { ...state, blogData: action.payload.httpResponse }
        case actions.GET_LOGIN_DATA:
            return { ...state, userCreds: [...action.payload], isActive: true }
        default:
            return state
    }
}

export default reducer;