import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardAction } from '../../action/dashboard';
import Cards from '../common/Cards';
import SideBarFilter from '../sidebar/SideBarFilters';
import './Dashboard.css';


const Dashboard = () => {
    const dispatch = useDispatch(); /* for dispatch action */
    const dashboard = useSelector((state) => state.dashboard); /* Global state */
    const { dashboards, isLoading } = dashboard

    /* Handle filter state */
    const [filters, setFilters] = useState({
        year: '',
        successfulLaunch: '',
        successfulLanding: ''
    });

    useEffect(() => {
        setFilters(JSON.parse(localStorage.getItem('filters')))
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        localStorage.setItem('filters', JSON.stringify(filters))
        dispatch(dashboardAction(filters))
        // eslint-disable-next-line
    }, [filters])

    return (
        <div className="container">
            <h2 className="header">SpaceX Launch Programs</h2>
            <div className="holder">
                <SideBarFilter
                    setFilters={setFilters}
                    filters={filters}
                />
                <Cards
                    dashboards={dashboards}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
}

export default Dashboard;
