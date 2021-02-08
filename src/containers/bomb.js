import React from 'react';
import '../css/bomb.css';
import Flame from './flame';

class Bomb extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            holder: true,
        }
    
    this.createFuse = this.createFuse.bind(this)
    }

    createFuse(){
        let children = [];
        let burnedStart = 9;

        if (this.props.wrongAnswers > 0) {
            burnedStart -= this.props.wrongAnswers;
        }
        for (let i = 1; i < 9; i++){
            if (i < burnedStart){
                children.push(<div className={`fuse${i}`}></div>)
            } else if (i => burnedStart){
                children.push(<div className={`fuse${i} burned${i}`}></div>)
            }
        }
        
        return children
    }

    render(){
        return(
            
            <div className="bomb">
                <div className="fuseBody">
                {this.createFuse()}
                </div>
                <Flame wrongAnswer={this.props.wrongAnswers} />
                <div className="top"></div>
                <div className="bombBody">
                    <div className="glare"></div>
                </div>
               
            </div>

        )
    }
}
export default Bomb;