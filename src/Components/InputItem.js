import React, {useState} from 'react'
import PropTypes from 'prop-types'

import Divider from './Divider'

const InputItem = ({title, placeholder, onChange}) => {

    const [goalTypeOpen, setGoalTypeOpen] = useState(false)

    function handleTypeClick () {
        setGoalTypeOpen(!goalTypeOpen)
        console.log(goalTypeOpen)
    }

    return (
        <div className="input-item-name">
            <div className="input-content">

                <div className="input">
                    <h3>{title}</h3>
                    <input placeholder={placeholder} onChange={onChange}/>
                    {/* <button type="button" onClick={handleTypeClick}>Goal Type</button> */}
                </div> 
            </div>

            {/* {goalTypeOpen && <div className="input-types">
                <div><button type="button">Efficiency</button></div>
                <div><button type="button">Health</button></div>
                <div><button type="button">Learn</button></div>
                <div><button type="button">Financial</button></div>
            </div>} */}
        </div>
        
    )
}
InputItem.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
export default InputItem

