import React, { Component } from 'react';
import pnf from '../images/404.png';

class Default extends Component {
    render() {
        return(
            <div className="container mt-5">
                <div className="col-10 mx-auto text-center text-title">
                    <img src={pnf} alt="404" height="350" width="550" />
                </div>
            </div>
        )
    }
}

export default Default;