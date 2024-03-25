

import React, { Component } from 'react'

export default class FooterContentContact extends Component {
  render() {
    return (
        <div className="col-1260 l-2-4 m-4 c-12">
            <h4 className="footer__content-heading margin-top-40">FOLLOW US</h4>
            <div className="footer__content-contact">
                <a href="" className="footer__content-contact-link">
                    <i className="footer__content-contact-icon fab fa-instagram-square" />
                </a>
                <a href="" className="footer__content-contact-link">
                    <i className="footer__content-contact-icon fab fa-youtube" />
                </a>
                <a href="" className="footer__content-contact-link">
                    <i className="footer__content-contact-icon fab fa-facebook" />
                </a>
            </div>
      </div>
      
    )
  }
}
