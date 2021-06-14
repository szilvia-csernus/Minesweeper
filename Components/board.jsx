import React from 'react';
import Tile from './tile';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.buildTiles = this.buildTiles.bind(this);
        this.buildRows = this.buildRows.bind(this)
    };

    buildTiles(row) {
        const updateGame = this.props.updateGame;
        const gameOver = (this.props.gameOver) ? true : false;

        return ( row.map((tile, tile_idx) => {
            return (
                <Tile 
                key={tile_idx} 
                tile={tile} 
                updateGame={updateGame} 
                gameOver={gameOver}
                />
            )
        })
        )
    }

    buildRows() {
        return (
            this.props.board.grid.map((row, row_idx) => {
                return (
                    <div key={row_idx}>
                        {this.buildTiles(row)}
                    </div>
                )
            })
        )
    };

    render() {
        
        return (
            <div className="board">
                {this.buildRows()}
            </div>
        )
    }
    
}


export default Board;