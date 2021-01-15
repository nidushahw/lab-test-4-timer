import React from 'react';
import { Component } from 'react';

class Clock extends Component {

    state = {
        now: ""
    };

    componentDidMount() {
        this.handle = setInterval(() => {
                let now = this.props.isTick ? new Date().toLocaleTimeString() : "";
                this.setState({
                    now: now
                });
            }, 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.handle);
    }

    render() {
        return (<div style={{textAlign: 'center'}}>
            <h2>{this.state.now}</h2>
        </div>);
    }
}
export default Clock;