import React, { Component } from 'react'
export default function LocationItemList(props){
    return(
        <li className="container__content-location-item">
            <a href="" className="container__content-location-link">
                <img
                src={props.imagePath}
                alt=""
                className="container__content-location-img"
                />
                <div className="container__content-location-label">
                <h3 className="container__content-location-city">
                    {props.Location}
                </h3>
                <span className="container__content-location-quantity">
                    <span className="container__content-location-number">
                        {props.Number}
                    </span>
                    chỗ ở
                </span>
                </div>
            </a>
        </li>
    )
}

