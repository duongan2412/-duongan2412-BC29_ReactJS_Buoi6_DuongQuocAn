import React, { Component } from 'react'
import InfoDisplay from './InfoDisplay'
import SeatLayout from './SeatLayout'
import UserInput from './UserInput'

export default class MoviesSeat extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="w3ls-reg">
                        <UserInput />
                        <SeatLayout />
                        <InfoDisplay />
                    </div>
                </div>
                <div className="copy-wthree">
                    <p>© 2018 Movie Seat Selection . All Rights Reserved | Design by
                        <a href="http://w3layouts.com/" rel="noopener" className='text-info'>W3layouts</a>
                    </p>
                </div>
            </div>

        )
    }
}
