import React from 'react'

const Divider = ({title, titleWidth}) => {

    const style = {
       "gridTemplateColumns": "5% " + titleWidth + " auto"
    }
    return (
        <div className="header" style={style}>
            <div className="bar"></div>
            <div><h2>{title}</h2></div>
            <div className="bar"></div>
        </div>
    )
}

export default Divider

