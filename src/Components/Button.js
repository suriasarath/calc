import React from 'react'
import './Button.css'



class Button extends React.Component{
    
    handleClick=buttonName=>{
        this.props.clickHandler(this.props.name);
        
    };

    render() {
        return(
            <button onClick={this.handleClick} className="component-button">{this.props.name}</button>
                );

    }
}
export default Button;