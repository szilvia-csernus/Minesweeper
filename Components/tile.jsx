import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    };

    handleClick(event) {
        const flag = event.altKey ? true : false;
        this.props.updateGame(this.props.tile, flag)
    }

    render() {
        const tile = this.props.tile;
        let classNames = "tile";
        let tileContent = "";
        
        if (tile.flagged) {
            tileContent = '\u2691';
        }

        if (this.props.gameOver && tile.bombed) {
            classNames += " revealed bombed";
            tileContent = tile.hiddenContent;
        }

        if (tile.explored && !tile.bombed) {
            classNames += " revealed";
            tileContent = tile.hiddenContent;
            // if (this.props.tile.bombed) {
            //     classNames += " bombed";
            // }
        }
    
        return (
            <div 
                className = { classNames } 
                onClick = {this.handleClick} >
                { tileContent }
            </div>
        )
    }
}

export default Tile;