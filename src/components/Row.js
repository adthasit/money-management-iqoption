import React from 'react';

class Row extends React.Component {
    render() {
        return (
            <tr>
                <th>1</th>
                <td><input className="input" type="number" placeholder="Money" min="1" max="5000"/></td>
                <td>
                    <span>$</span>2</td>
                <td>
                    <span>$</span>23</td>
                <td>
                    <a className="button is-success">
                        <span className="icon is-small">
                            <i className="fa fa-check"></i>
                        </span>
                        <span>Win</span>
                    </a>
                </td>
            </tr>
        );
    }
}

export default Row;