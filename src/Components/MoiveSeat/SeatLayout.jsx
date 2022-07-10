import React, { Component } from 'react'
import { seatList } from "./../../data/danhSachGhe.json";

export default class SeatLayout extends Component {
    render() {

        return (
            <>
                {/* seat availabilty list */}
                <ul className="seat_w3ls">
                    <li className="smallBox greenBox">Selected Seat</li>
                    <li className="smallBox redBox">Reserved Seat</li>
                    <li className="smallBox emptyBox">Empty Seat</li>
                </ul>
                {/* seat availabilty list */}
                {/* seat layout */}
                <div className="seatStructure txt-center" style={{ overflowX: 'auto' }}>
                    <p id="notification" /><table id="seatsBlock">
                        <tbody><tr>
                            <td />
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td />
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                        </tr>
                            <tr>
                                <td>A</td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A1" />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A2" />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A3" />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A4" />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A5" />
                                </td>
                                <td className="seatGap" />
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A6" />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A7" />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A8" />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A9" />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A10" />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A11" />
                                </td>
                                <td>
                                    <input type="checkbox" className="seats" defaultValue="A12" />
                                </td>
                            </tr>
                        </tbody></table>
                    <div className="screen">
                        <h2 className="wthree">Screen this way</h2>
                    </div>
                    {/* <button onClick="updateTextArea()">Confirm Selection</button> */}
                    <button>Confirm Selection</button>
                </div>
                {/* //seat layout */}
            </>
        )
    }
}
