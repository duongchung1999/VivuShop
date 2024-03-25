import React, { Component } from 'react'

export default class FooterCopyright extends Component {
  render() {
    return (
        <div className="footer__copyright">
            <div className="grid wide-1260">
                <div className="row footer__copyright-content">
                    <p className="col l-12 m-12 c-12 footer__copyright-item">
                    © 2021 Luxstay. Bản quyền thuộc về Công ty TNHH Luxstay Việt Nam - MSDN:
                    0108308449. Mọi hành vi sao chép đều là phạm pháp nếu không có sự cho
                    phép bằng văn bản của chúng tôi.
                    </p>
                    <p className="col l-12 m-12 c-12 footer__copyright-item">
                    Tầng 21 tòa nhà Capital Tower số 109 phố Trần Hưng Đạo, phường Cửa Nam,
                    quận Hoàn Kiếm, Hà Nội. Email: info@luxstay.com, Số điện thoại:
                    18006586.
                    </p>
                    <p className="col l-12 m-12 c-12 footer__copyright-item">
                    Số Giấy chứng nhận đăng ký doanh nghiệp: 0108308449, ngày cấp:
                    06/06/2018, nơi cấp: Sở Kế hoạch và Đầu tư TP Hà Nội
                    </p>
                </div>
            </div>
        </div>
      
    )
  }
}
