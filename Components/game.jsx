import React from 'react';

import Board from './board';
import * as Minesweeper from '../minesweeper';


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = { board: new Minesweeper.Board(9, 10) };
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
        
    };

    updateGame(tile, flag) {
        if (flag === true) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({ board: this.state.board })
    };


    restartGame() {
        this.setState({ board: new Minesweeper.Board(9, 10) })
    }

    render() {
        let modal;
        let gameOver = false;
        if (this.state.board.lost() || this.state.board.won()) {
            const text = this.state.board.won() ? "Congratulations, You won!" : "Game Over. You lost!";
            gameOver = true;
            modal =
                <div className='modal-screen'>
                    <div className='modal-content'>
                    <p>{text}<br /><br /></p>
                        <button onClick={this.restartGame}>Play a new game</button>
                    </div>
                </div>;
        }

        
        return (
            <div>
                {modal}
                <Board board={this.state.board} updateGame={this.updateGame} gameOver={gameOver} />
            </div>
        )
    }
}

export default Game;