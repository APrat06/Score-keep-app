import React from 'react';
import FlipMove from 'react-flip-move';
import Player from './Player';

export default class PlayerList extends React.Component {
    renderPlayers(){
        if (this.props.players.length === 0){return <p className='item item__message'>Add your first player to begin</p>;}
        else{
        return this.props.players.map((player) => {
            return <Player key={player._id} player={player}/> 
        });}
    }
    render(){
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        );
    }
};
PlayerList.propTypes =  {players: React.PropTypes.array.isRequired}