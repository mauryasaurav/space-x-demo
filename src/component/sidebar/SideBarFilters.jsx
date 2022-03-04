import React from 'react'
import PropTypes from 'prop-types';
import { FILTER_LANDING_AND_LAUNCHING_YEAR, FILTER_YEAR } from '../../constant/constant'
import SidebarFilter from '../common/SidebarFilter'

import './SideBarFilters.css'

const SideBarFilters = ({ setFilters, filters }) => {
    return (
        <div className="sidebar">
            <h1 className="sidebar_header">Filters</h1>
            <SidebarFilter
                header={'Launch year'}
                setFilters={setFilters}
                selectedFilter={filters.year}
                state={'year'}
                list={FILTER_YEAR}
            />
            <SidebarFilter
                header={'Successful Launch'}
                setFilters={setFilters}
                state={'successfulLaunch'}
                selectedFilter={filters.successfulLaunch}
                list={FILTER_LANDING_AND_LAUNCHING_YEAR}
            />
            <SidebarFilter
                header={'Successful Landing'}
                setFilters={setFilters}
                state={'successfulLanding'}
                selectedFilter={filters.successfulLanding}
                list={FILTER_LANDING_AND_LAUNCHING_YEAR}
            />
        </div>
    )
}

SideBarFilters.propTypes = {
    setFilters: PropTypes.func.isRequired,
    filters: PropTypes.object.isRequired
}

export default SideBarFilters
