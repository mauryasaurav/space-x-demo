import { GET_DASHBOARD_ERROR, GET_DASHBOARD_START, GET_DASHBOARD_SUCCESS } from "../action/dashboard";

/* Global state for dashboard */
const initialState = {
    isLoading: false,
    dashboards: [],
    dashBoardErr: {}
}

/*Handle dashboard reducer */
const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DASHBOARD_START:
            return {
                ...state,
                isLoading: false
            };

        case GET_DASHBOARD_SUCCESS:
            return {
                ...state,
                isLoading: true,
                dashboards: action.dashboard
            };

        case GET_DASHBOARD_ERROR:
            return {
                ...state,
                isLoading: false,
                dashBoardErr: action.dashboardError
            };
        default:
            return state;
    }
}

export default dashboardReducer