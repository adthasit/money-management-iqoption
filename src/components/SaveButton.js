import React from 'react';
import '../style.css'

class SaveButton extends React.Component {
    render() {
        return (
            <div className="column has-text-centered">
                <a className="button is-success is-hovered" disabled>Save</a>
            </div>
        );
    }
}

export default SaveButton;