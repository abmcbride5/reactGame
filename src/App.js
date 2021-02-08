import React from 'react';
import './css/App.css';
import Table from './containers/table';
import Bomb from './containers/bomb';
import GameOver from './containers/gameOver';
import words from './helperFunctions/words';



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      word: words[Math.floor(Math.random() * words.length)],
      chances: 8,
      wrongAnswers: 0,
    }
    this.incrementWrongAnswers = this.incrementWrongAnswers.bind(this)
  }
 
  incrementWrongAnswers(){
    this.setState({
      wrongAnswers: this.state.wrongAnswers + 1,
    })
    console.log(this.state.wrongAnswers);
  }

  render(){
  return (
    <div className="App">
      <h1>Put Out The Fuse</h1>
    {this.state.wrongAnswers < this.state.chances && <Bomb wrongAnswers={this.state.wrongAnswers} />}
    {this.state.wrongAnswers === this.state.chances && <GameOver/>}
    <Table word={this.state.word} burnFuse={this.incrementWrongAnswers} />
    </div>
  );
}
}

export default App;
