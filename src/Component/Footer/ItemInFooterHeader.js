import React, { Component } from 'react'

export default function FooterItems(props) {
    return(
        <li class="footer__content-item">
            <a href="" class="footer__content-link">{props.Item}</a>
        </li>
    )
}
