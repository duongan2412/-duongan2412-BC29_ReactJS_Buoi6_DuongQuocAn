import React, { Component } from 'react';
import style from "./style.module.css";
import { connect } from 'react-redux';
import { huyVeAction } from '../../Store/Reducers/action/DatVeAction';

class ThongTinDatGhe extends Component {
    renderThongTin = () => {
        return this.props.dsGheDangDat.map((ele, idx) => {
            return (
                <tr key={idx}>
                    <th>{ele.soGhe}</th>
                    <th>{ele.gia.toLocaleString()}</th>
                    <th>
                        <button onClick={() => {
                            this.props.huyGhe(ele)
                        }}
                            className="btn btn-danger">CANCEL</button>
                    </th>
                </tr>
            )
        })
    };

    render() {
        // console.log(this.props);
        return (
            <div>
                <div className={`d-flex flex-column`}>
                    <div>
                        <button className={`${style.gheDuocChon}`} ></button>
                        <span className='text-white pl-2'>booked chair</span>
                    </div>
                    <div>
                        <button className={`${style.gheDangChon} mt-3`} ></button>
                        <span className='text-white pl-2'>selecting chair</span>
                    </div>
                    <div>
                        <button className={`${style.ghe} mt-3`} ></button>
                        <span className='text-white pl-2'>not booked chair</span>
                    </div>
                </div>
                <div className='mt-5'>
                    <table className="table text-white" border={2}>
                        <thead>
                            <tr>
                                <th className='text-primary'>Seat Number</th>
                                <th className='text-info'>Price</th>
                                <th className='text-danger'>Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderThongTin()}
                        </tbody>
                        <tfoot>
                            <tr>
                                {/* <span className='text-white'>Total : {this.tongTien()}</span> */}
                                <td></td>
                                <td>Totals</td>
                                <td>{this.props.dsGheDangDat.reduce((tongTien, ele) => {
                                    return tongTien += ele.gia
                                }, 0).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.DatVeReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        huyGhe: (ghe) => {
            dispatch(huyVeAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);