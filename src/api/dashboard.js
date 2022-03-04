import { axiosRequest } from "./helper"

/* GET ALL DASHBOARD API */
export const getDashboardApi = (data) => {
    const { year, successfulLaunch, successfulLanding } = data
    return axiosRequest(`GET`, `launches?limit=100${year ? `&launch_year=${year}` : ''}${successfulLaunch ? `&launch_success=${successfulLaunch}` : ''}${successfulLanding ? `&landing_success=${successfulLanding}` : ''}`
    )
}