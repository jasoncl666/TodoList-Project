import React, {useState} from 'react'
import PropTypes from 'prop-types'

import Divider from './Divider'


const InputItemFrequency = ({title, placeholder, onChange}) => {

    const [onDayly, setOnDayly] = useState(true)
    const [onWeekly, setOnWeekly] = useState(false)
    const [onMonthly, setOnMonthly] = useState(false)

    function onDaylyClick(){
        setOnDayly(true)
        setOnWeekly(false)
        setOnMonthly(false)
    }

    function onWeeklyClick(){
        setOnDayly(false)
        setOnWeekly(true)
        setOnMonthly(false)
    }

    function onMonthlyClick(){
        setOnDayly(false)
        setOnWeekly(false)
        setOnMonthly(true)
    }

    const onSelectStyle = {
        width: "85%",
        height: "3em"
    }

    const normalStyle = {
        width: "60%",
        height: "2.5em"
    }

    return (
        <div className="input-item-frequency">
            <div className="input-content">
                <Divider title={title} titleWidth={"40%"}/>

                <div className="freq-options-detail">
                    <div><button className="dayly-btn" type="button" onClick={onDaylyClick} style={onDayly? onSelectStyle : normalStyle}>Dayly</button></div>
                    <div><button className="weekly-btn" type="button" onClick={onWeeklyClick} style={onWeekly? onSelectStyle : normalStyle}>Weekly</button></div>
                    <div><button className="monthly-btn" type="button" onClick={onMonthlyClick} style={onMonthly? onSelectStyle : normalStyle}>Monthly</button></div>
                </div>

                <Divider title={"More Specifically"} titleWidth={"50%"}/>

                {onDayly && <div className="dayly-options options">
                    <div><button type="button">Morning</button></div>
                    <div><button type="button">Afternoon</button></div>
                    <div><button type="button">Evening</button></div>
                </div>}

                {onWeekly && <div className="weekly-options options">
                    <div><button type="button">Mon</button></div>
                    <div><button type="button">Tue</button></div>
                    <div><button type="button">Wed</button></div>
                    <div><button type="button">Thur</button></div>
                    <div><button type="button">Fri</button></div>
                    <div><button type="button">Sat</button></div>
                    <div><button type="button">Sun</button></div>
                    <div><button type="button" className="all-btn">Whole Week</button></div>
                </div>}

                {onMonthly && <div className="monthly-options options">
                    <div><button type="button">Beginning</button></div>
                    <div><button type="button">Middle</button></div>
                    <div><button type="button">End</button></div>
                </div>}
            </div>
        </div>
        
    )
}
InputItemFrequency.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
export default InputItemFrequency

