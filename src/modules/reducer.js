import * as actions from "./actionType";

const initState = {
    employeeData: [],
    timesheetData: [],
    upcomingEventData: [],
}

export const reducer = (state = initState, action) => {
    
    switch (action.type) {
        case actions.GET_EMPLOYEE_DATA:
            return { ...state, employeeData: action.payload.httpResponse }
        case actions.GET_TIMESHEET_DATA:
            return { ...state, timesheetData: action.payload.httpResponse }
        case actions.GET_EVENT_DATA:
            return { ...state, upcomingEventData: action.payload.httpResponse }
        default:
            return state
    }
}

export default reducer;