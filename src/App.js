import React from 'react';
import './css/App.css';
import Table from './containers/table';
import Bomb from './containers/bomb';
import GameOver from './containers/gameOver';
import Winner from './containers/winner';
import words from './helperFunctions/words';


const gameWord = words[Math.floor(Math.random() * words.length)]
const length = gameWord[0].length;
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      word: gameWord[0],
      clue: gameWord[1],
      chances: 8,
      wrongAnswers: 0,
      correctAnswers: 0,
      length: length,
      winner: false
    };
    this.incrementWrongAnswers = this.incrementWrongAnswers.bind(this);
    this.incrementCorrectAnswers = this.incrementCorrectAnswers.bind(this);
  }
 
  incrementWrongAnswers(){
    this.setState({
      wrongAnswers: this.state.wrongAnswers + 1,
    })
    console.log(this.state.wrongAnswers);
  }
  incrementCorrectAnswers(){
    this.setState({
      correctAnswers: this.state.correctAnswers + 1,
    })
    console.log("correct Answers", this.state.correctAnswers, this.state.length);
    if (this.state.correctAnswers === this.state.length - 1){
      console.log("check");
      this.setState({
        winner: true,
      })

    }
  }

  render(){
  return (
    <div className="App">
      <h1>Put Out The Fuse</h1>
    {!this.state.winner && this.state.wrongAnswers < this.state.chances && <Bomb wrongAnswers={this.state.wrongAnswers} />}
    {this.state.wrongAnswers === this.state.chances && <GameOver/>}
    {this.state.winner && <Winner />}
    <Table word={this.state.word} clue={this.state.clue} checkWinner={this.incrementCorrectAnswers} burnFuse={this.incrementWrongAnswers} />
    </div>
  );
}
}

export default App;
