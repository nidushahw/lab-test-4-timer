import { Component } from 'react';
import LogItem from './LogItem';
import Clock from './Clock';


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: 0,
            stopTime: 0,
            duration: 0,
            timerLog: [],
            isTick: false
        }
    }

    calculateDuration = (stopTime) => {
        let millisec = Math.abs(stopTime - this.state.startTime);
        let seconds = Math.ceil((millisec / 1000).toFixed(2));

        let minutes = Math.floor((millisec / (1000 * 60)).toFixed(1));

        if (seconds > 60) {
            seconds = seconds - (minutes * 60);
        }

        let duration = `Duration => minutes: ${minutes} seconds: ${seconds}`;
        return duration;
    }

    handleStart = (event) => {
        this.setState({
            startTime: new Date(),
            isTick: true
        })
    };

    handleStop = (event) => {
        let stopTime = new Date();
        let duration = this.calculateDuration(stopTime);
        let timerLog = this.state.timerLog;
        timerLog.push(duration);
        this.setState({
            stopTime: stopTime,
            duration: duration,
            timerLog: timerLog,
            isTick: false
        });
    }
    handleReset = (event) => {
        this.setState({
            startTime: 0,
            stopTime: 0,
            duration: 0,
            timerLog: [],
            isTick: false
        });
    }

    getDisplayTime = (date) => {
        return date ? date.toLocaleTimeString() : "";
    }


    render() {
        const timerLogList = (
            <div>
                {this.state.timerLog.map((timer, index) => (
                    <LogItem key={index} timerLog={timer} />
                ))}
            </div>
        );

        return (
            <div>
                <div className="container">
                    <div style={divStyle}>
                        <label>Start time:</label>
                        <input type="text" value={this.getDisplayTime(this.state.startTime)} readOnly></input>
                    </div>
                    <div style={divStyle}>
                        <label>Stop time:</label>
                        <input type="text" value={this.getDisplayTime(this.state.stopTime)} readOnly></input>
                    </div>
                    <div>
                        <Clock isTick={this.state.isTick} />
                    </div>
                    <div style={divStyle}>
                        <button style={buttonStyle} onClick={this.handleStart}>Start</button>
                    </div>
                    <div style={divStyle}>
                        <button style={buttonStyle} onClick={this.handleStop}>Stop</button>
                    </div>
                    <div style={divStyle}>
                        <button style={buttonStyle} onClick={this.handleReset} >Reset</button>
                    </div>
                </div>
                <div>
                    {timerLogList}
                </div>
            </div>
        );
    }
}

export default Timer;

const divStyle = {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 3,
    display: 'block',
    margin: 5,
    textAlign: 'center'
};

const buttonStyle = {
    width: '50%',
    fontWeight: 'bold',
    backgroundColor: '#8872db',
    height: 40,
    border: '1 solid black',
    cursor: '-webkit-grab'
}