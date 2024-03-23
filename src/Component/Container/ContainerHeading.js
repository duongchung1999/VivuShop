import React, { Component } from 'react'

export default class ContainerHeading extends Component {
  render() {
    return (
        <div className="container__heading">
            <h2 className="container__heading-intro">Chào mừng đến với Luxstay!</h2>
            <p className="container__heading-description">
            Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên Luxstay
            </p>
            <p className="container__heading-login">
            <a href="" className="container__heading-link">
                Đăng nhập
            </a>{" "}
            hoặc{" "}
            <a href="" className="container__heading-link">
                Đăng ký
            </a>{" "}
            để trải nghiệm !
            </p>
        </div>
    )
  }
}
