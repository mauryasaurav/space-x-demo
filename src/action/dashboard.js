import { getDashboardApi } from '../api/dashboard'

export const GET_DASHBOARD_START = "GET_DASHBOARD_START"
export const GET_DASHBOARD_SUCCESS = "GET_DASHBOARD_SUCCESS"
export const GET_DASHBOARD_ERROR = "GET_DASHBOARD_ERROR"

/* Dashboard Action */
const getDashBoardStart = () => ({
    type: GET_DASHBOARD_START
})

const getDashboardSuccess = (dashboard) => ({
    type: GET_DASHBOARD_SUCCESS,
    dashboard
})

const getDashboardError = (dashboardError) => ({
    type: GET_DASHBOARD_ERROR,
    dashboardError
})

/* Dashboard Action */
export const dashboardAction = filters => async dispatch => {
    dispatch(getDashBoardStart());
    try {
        const resp = await getDashboardApi(filters)
        dispatch(getDashboardSuccess(resp.data));
        return resp;
    }
    catch (error) {
        dispatch(getDashboardError(error.response))
        return false
    }
}
