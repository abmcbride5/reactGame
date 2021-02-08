import React from 'react';
import '../css/letter.css';

class Letter extends React.Component{
    //this component will produce an input the will
    //take one letter, check if it is correct and 
    // change the isCorrect boolean accordingly

    constructor(props){
        super(props);
        this.state = {
            letter: '',
            correct: false,
        };

        this.checkLetter = this.checkLetter.bind(this);
        
    }

    checkLetter(event){
        //checks to see if the letter is correct for the position
        if (event.target.value === this.props.letter){
            this.setState({
                letter: event.target.value,
                correct: true,    
            })
            return
        }
        if (!this.state.correct){
            this.props.burnFuse()
            console.log("burn Fuse!")
        }
    }
    render(){
        return(
            <div className="letterBox">
               {this.state.correct === true ? <p>{this.props.letter}</p> : <input 
                type="text" 
                onChange={this.checkLetter} 
                value={this.state.letter} 
                size="1"
                maxLength="1"
                />}
            </div>
        );
    }  
}

export default Letter;