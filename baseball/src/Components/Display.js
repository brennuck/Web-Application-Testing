import React from 'react';

function Display(props) {
    return (
        <div>
            <h3>Strikes: {props.strikes}</h3>
            <h3>Balls: {props.balls}</h3>
            <h3>Hits: {props.hits}</h3>
            <h3>Outs: {props.outs}</h3>
        </div>
    )
}

export default Display;