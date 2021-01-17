import React, {Component} from 'react'
import './Display.css'



class Display extends Component{

    render() {
        return(
        <div className="component-display">
            <label>{this.props.value}</label>
        </div>
        );
    }
}
export default Display;