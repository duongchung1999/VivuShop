import React, { Component } from 'react'
import FooterContact from './FooterContact'
import FooterColumItems from './FooterColumItems'
import FooterItems from './ItemInFooterHeader'
import FooterDowloadApp from './FooterDowloadApp'
import FooterSecure from './FooterSecure'
import FooterCertifi from './FooterCertifi'
import FooterContentContact from './FooterContentContact'
import FooterCopyright from './FooterCopyright'


export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer__content'>
            <div className='grid wide-1260'>
                <div className='row padding-bottom-32'>
                    <FooterContact/>
                    <FooterColumItems 
                        Header="TOP HOMESTAY ĐƯỢC YÊU THÍCH"
                        Items={<ItemsList1/>}
                    />
                    <FooterColumItems 
                        Header="KHÔNG GIAN ƯA THÍCH"
                        Items={<ItemsList2/>}
                    />
                    <FooterColumItems 
                        Header="VỀ CHÚNG TÔI"
                        Items={<ItemsList3/>}
                    />
                    <FooterColumItems 
                        Header="DOWLOAD LUXSTAY APP"
                        Items={<FooterDowloadApp/>}
                    />
                </div>
                <div className='row'>
                    <div className='col-1260 l-2-4 hide-on-MT hide-on-M'></div>
                    <FooterSecure/>
                    <FooterCertifi/>
                    <FooterContentContact/>

                </div>
                
            </div>
            
        </div>
        <div>
            <FooterCopyright/>
        </div>
        
      </div>
    )
  }
}
function ItemsList1(){
    return(
        <ul className="footer__content-list">
            <FooterItems Item="Homestay Đà Lạt"/>
            <FooterItems Item="Homestay Đà Nẵng"/>
            <FooterItems Item="Homestay Hội An"/>
            <FooterItems Item="Homestay Sài Gòn"/>
            <FooterItems Item="Homestay Hà Nội"/>
            <FooterItems Item="Homestay Măng Đen"/>
            <FooterItems Item="Homestay Hà Giang"/>
        </ul>
        
    )
}
function ItemsList2(){
    return(
        <ul className="footer__content-list">
            <FooterItems Item="Căn hộ dịch vụ"/>
            <FooterItems Item="Nhà riêng"/>
            <FooterItems Item="Biệt thự"/>
            <FooterItems Item="Studio"/>
            <FooterItems Item="Travel Guide"/>
        </ul>
        
    ) 
}
function ItemsList3(){
    return(
        <ul className="footer__content-list">
            <FooterItems Item="Điều khoản dịch vụ"/>
            <FooterItems Item="Điều khoản dịch vụ"/>
            <FooterItems Item="Điều khoản dịch vụ"/>
            <FooterItems Item="Điều khoản dịch vụ"/>
            <FooterItems Item="Điều khoản dịch vụ"/>
            <FooterItems Item="Điều khoản dịch vụ"/>
            <FooterItems Item="Điều khoản dịch vụ"/>
        </ul>
        
    ) 
}
