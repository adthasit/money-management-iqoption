import React from 'react';
import {Link} from 'react-router-dom';

class Tab extends React.Component {
    render() {
        return (
            <div className="tabs is-centered">
                <ul>
                    <li className="is-active">
                        <Link to="/loss-martin">Loss Martingale</Link>
                    </li>
                    <li>
                        <Link to="/win-martin">Win Martingale</Link>
                    </li>
                    <li>
                       <Link to="/kelly">Kelly Formular</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Tab;