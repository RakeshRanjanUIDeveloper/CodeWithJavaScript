import React from 'react';
import './Clock.css'
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            time : new Date()
        }
    }
    componentDidMount(){
         this.timerId = setInterval(() =>{
           this.setState({
                time: new Date()
           })
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    render(){
        return (
            <div className='clock'>
                <h2>Time Now</h2>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        )
    }

}
export default Clock;