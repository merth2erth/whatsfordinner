import React, { Component } from 'react';
import moment from 'moment';

export class TodayIs extends Component {
    constructor() {
        super();

        var today = new Date(),
            date = (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getFullYear() + ".";

        this.state = {
            date: moment().format("dddd, MMMM D, YYYY.")
        };
    }

    render() {
        return (
            <div className='date'>
                Today is {this.state.date}
            </div>
        );
    }
}
 export default Date;