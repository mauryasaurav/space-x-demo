import React from 'react'
import PropTypes from 'prop-types';
import SimpleLoading from './LoadingScreen/SimpleLoading';

import './Cards.css'

const Cards = ({ dashboards, isLoading }) => {
    return <div className="card_holder">
        {dashboards?.map((c, index) => {
            const {
                links,
                mission_name,
                mission_id,
                launch_success,
                launch_year
            } = c;
            return <div className="card_container" key={index}>
                <div className="center-flex" >
                    <img className="card_image" src={links.mission_patch} alt="card_image" />
                </div>
                <div className="mission_name">{mission_name} #{index + 1}</div>
                <div className="flex-box">
                    <div className="label">Mission Id:</div>
                    <div className="value">{mission_id[0] ? mission_id[0] : 'No Data'} </div>
                </div>
                <div className="flex-box">
                    <div className="label">Launch Year:</div>
                    <div className="value">{launch_year} </div>
                </div>
                <div className="flex-box">
                    <div className="label">Successful Launch:</div>
                    <div className="value">{launch_success ? 'True' : 'False'} </div>
                </div>
                <div className="flex-box">
                    <div className="label">Successful Landing:</div>
                    <div className="value">{launch_success ? 'True' : 'False'} </div>
                </div>
            </div>
        })}
        {!isLoading && <SimpleLoading />}
        {!dashboards.length && <div className="center"> NOT FOUND! </div>}
    </div >
}

Cards.propTypes = {
    dashboards: PropTypes.array,
    isLoading: PropTypes.bool.isRequired
}

export default Cards
