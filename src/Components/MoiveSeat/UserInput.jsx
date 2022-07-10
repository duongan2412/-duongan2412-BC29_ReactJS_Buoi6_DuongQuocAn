import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserInput extends Component {
    state = {
        value: {
            userName: "",
            seatNum: ""
        },
        error: {
            userName: "",
            seatNum: ""
        }
    }
    handleChange = (event) => {
        let { id, value } = event.target;

        let messError = "";

        if (value.trim() === "") {
            messError = id + " is not blank"
        };

        let values = { ...this.state.value, [id]: value };
        let errors = { ...this.state.errorInput, [id]: messError };

        this.setState({
            value: values,
            error: errors
        }, () => {
            console.log(this.state.value)
            console.log(this.state.error)
        })
    }

    render() {
        return (
            <>
                {/* input fields */}
                <div className="inputForm">
                    <h2>fill the required details below and select your seats</h2>
                    <div className="mr_agilemain">
                        <div className="agileits-left">
                            <p className='text-white'> Name
                                <span>*</span>
                            </p>
                            <span id="nameError">{this.state.error.userName}</span>
                            <input type="text" id="userName" value={this.state.value.userName} onChange={this.handleChange} required />
                        </div>

                        <div className="agileits-right">
                            <p className='text-white'> Number of Seats
                                <span>*</span>
                            </p>
                            <span id="seatNumError">{this.state.error.seatNum}</span>
                            <input type="number" id="seatNum" value={this.state.value.seatNum} onChange={this.handleChange} required min={1} />
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            this.props.addSeat(this.state.value)
                        }}
                    >Start Selecting</button>
                </div>
                {/* //input fields */}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSeat: (seat) => {
            dispatch({
                type: "ORDER_SEAT",
                payload: seat
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(UserInput);