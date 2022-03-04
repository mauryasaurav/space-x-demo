import React from 'react';
import PropTypes from 'prop-types';

import './SidebarFilter.css';

const SidebarFilter = ({ list, header, setFilters, state, selectedFilter }) => {
    return (
        <>
            <div className="filter_header">{header}</div>
            <div className="sidebar_container">
                {list.map((filter) => {
                    return <div
                        style={{ background: selectedFilter !== filter ? "#c5df9d" : "#7aba02" }}
                        key={filter}
                        onClick={() => setFilters((prev) => ({
                            ...prev,
                            [state]: selectedFilter === filter ? '' : filter
                        }))}
                        className="filter_list"
                    >
                        {filter}
                    </div>
                })
                }
            </div>
        </>
    )
}

SidebarFilter.propTypes = {
    list: PropTypes.array,
    header: PropTypes.bool.isRequired,
    setFilters: PropTypes.func.isRequired,
    state: PropTypes.string.isRequired,
    selectedFilter: PropTypes.string.isRequired
}

export default SidebarFilter