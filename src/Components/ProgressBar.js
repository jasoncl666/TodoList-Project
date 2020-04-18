import React, {Component} from 'react'

class ProgressBar extends Component {

    render(){

        const {
            progress,
            type
        } = this.props

        const groupTopProgressStyle = {
            width: progress+"0%",
            background: "rgb(231, 135, 63)"
        }

        const userProgressStyle = {
            width: progress+"0%",
            background: "rgb(135, 190, 90)"
        }

        const groupProgressBarBGColor = {
            background: "rgb(234, 170, 123)"
        }

        const userProgressBarBGColor = {
            background: "rgb(197, 235, 152)"
        }


        return(
            <div className="todo-progress-container" style={type==="group"? groupProgressBarBGColor : userProgressBarBGColor}>
                <div className="todo-current-progress" style={type==="group"? groupTopProgressStyle : userProgressStyle}></div>
            </div>
        )
    }
}

export default ProgressBar