    import React from 'react';

    function Dashboard(props) {
        return (
            <div>
                <button onClick={props.hit}>Hit</button>
                <button onClick={props.strike}>Strike</button>
                <button onClick={props.ball}>Ball</button>
                <button onClick={props.out}>Out</button>
            </div>
        )
    }

    export default Dashboard;