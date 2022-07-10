import React, { Component } from 'react'
import { connect } from 'react-redux';

export default class InfoDisplay extends Component {
    render() {
        // const { name, seatNum } = this.props.customer;
        // console.log(this.props);
        return (
            <>
                {/* details after booking displayed here */}
                <div className="displayerBoxes txt-center" style={{ overflowX: 'auto' }}>
                    <table className="Displaytable w3ls-table" width="100%">
                        <tbody><tr>
                            <th>Name</th>
                            <th>Number of Seats</th>
                            <th>Seats</th>
                            <th>Totals</th>
                            <th>Action</th>
                        </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody></table>
                </div>
                {/* //details after booking displayed here */}
            </>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         ...state.moviesReducer,
//     }
// }
// connect(mapStateToProps)(InfoDisplay)