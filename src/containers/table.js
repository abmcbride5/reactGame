import React from 'react';
import Letter from './letter';
import '../css/table.css';

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            holder: 1
        }

        this.createTable = this.createTable.bind(this);
    }

    createTable(){
        let table = []
        let children = []
        for (let i = 0; i < this.props.word.length; i++){
            children.push(<td><Letter checkWinner={this.props.checkWinner} burnFuse={this.props.burnFuse} letter={this.props.word[i]} /></td>)

        }
        table.push(<table><tbody><tr>{children}</tr></tbody></table>)
        return table
    }

    render(){
        return (
            <div className="table">
                <h2>Clue: food you eat</h2>
                {this.createTable()}
            </div>
        )
    }

}

export default Table;