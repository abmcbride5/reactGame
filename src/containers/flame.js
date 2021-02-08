import React from 'react';
import '../css/flame.css';

class Flame extends React.Component{
    

    render(){
        return(
            
            <div className={`flame${this.props.wrongAnswer}`}>
                <div className="red">
                </div>
                <div className="red2">
                </div>
                <div className="orange">
                </div>
                <div className="orange2">
                </div>
                <div className="yellow">
                </div>
                <div className="yellow2">
                </div>
                <div className="white">
                </div>
                <div className="white2">
                </div>
            </div>

        )
    }
}
export default Flame;