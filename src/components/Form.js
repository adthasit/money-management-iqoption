import React from 'react';

class Form extends React.Component {
    render() {
        return (

                <div className="field has-addons has-addons-centered">
                    <p className="control">
                        <span className="select">
                            <select>
                                <option selected>$</option>
                            </select>
                        </span>
                    </p>
                    <p className="control">
                        <input className="input" type="text" placeholder="Amount of money"/>
                    </p>
                    <p className="control">
                        <a className="button is-primary">
                            Add
                        </a>
                    </p>
                </div>

        );
    }
}

export default Form;