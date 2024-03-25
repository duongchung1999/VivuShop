import certifi_img from '../../assets/img/certifi.png';
import certifi_img2 from '../../assets/img/certifi2.png';

import React, { Component } from 'react'

export default class FooterCertifi extends Component {
  render() {
    return (
        <div className="col-1260 l-2-4 m-4 c-12">
            <h4 className="footer__content-heading margin-top-40">CERTIFICATION</h4>
            <div className="footer__content-transaction">
                <a href="" className="footer__content-transaction-link">
                    <img
                    src={certifi_img}
                    alt=""
                    className="footer__content-certification-img"
                    />
                </a>
                <a href="" className="footer__content-transaction-link">
                    <img
                    src={certifi_img2}
                    alt=""
                    className="footer__content-certification-img"
                    />
                </a>
            </div>
        </div>
    )
  }
}
