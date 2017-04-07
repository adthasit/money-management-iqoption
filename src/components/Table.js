import React from 'react';
import Form from './Form'
import Row from './Row'
import SaveButton from './SaveButton'

class Table extends React.Component {
    render() {
        return (
            <div className="container">
                <Form/>
                <table className="table is-bordered is-striped">
                    <thead>
                        <tr>
                            <th>
                                <abbr>Order</abbr>
                            </th>
                            <th>Amount</th>
                            <th>
                                <abbr>Profit</abbr>
                            </th>
                            <th>
                                <abbr>Net Profit</abbr>
                            </th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>
                                <abbr>Total</abbr>
                            </th>

                            <th>$10</th>
                            <th>
                                <abbr>$10</abbr>
                            </th>
                            <th>
                                <abbr>$10</abbr>
                            </th>
                            <th>Win 2 : Lose 3 (20%)</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <Row/>
                    </tbody>
                </table>
                <SaveButton/>
            </div>
        );
    }
}

export default Table;