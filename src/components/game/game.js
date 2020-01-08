import React from "react"
import axios from "axios"

import GameMap from './gamemap';
import RoomInfo from './roomInfo';
import Controls from './control';

import './game.scss'

const Game = prop => {

    return (
        <div className="game-container">
            <div className="game-map">
                <GameMap />
            </div>
            <div className="side-panel">
                <RoomInfo />
                <Controls />
            </div>
        </div>
    )
}

export default Game;