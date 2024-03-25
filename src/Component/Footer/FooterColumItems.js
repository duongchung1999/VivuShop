import React, { Component } from 'react'

export default class FooterColumItems extends Component {
  render() {
    return (
        <div className="col-1260 l-2-4 m-6 hide-on-M">
            <h4 className="footer__content-heading">{this.props.Header}</h4>
            {this.props.Items}
      </div>
      
    )
  }
}
