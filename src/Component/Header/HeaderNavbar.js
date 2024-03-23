import '../../assets/css/base.css'
import '../../assets/css/main.css'
import '../../assets/css/grid.css'
import '../../assets/css/responsive.css'
import vietnamImage from '../../assets/img/vietnam.png';
import vietnamlogo from '../../assets/img/VN.svg';
import english from '../../assets/img/EL.svg';
import korean from '../../assets/img/KR.svg';
import '../../assets/fonts/fontawesome-free-5.15.4-web/css/all.min.css'
import { Component } from 'react';

function NavbarItem(props){
    return (
        <li className='header__navbar-item'>
            <a href="" className="header__navbar-link">
            {props.Title}
            </a>
        </li>
    )
}

function LanguageItem(props){
  return(
    <li className="header__navbar-language-item">
      <a href="" className="header__navbar-language-link">
        <img
          src= {props.link}
          alt=""
          className="header__navbar-language-img"
        />
        {props.languageName}
        {props.languageName == 'Tiếng Việt' && <i className="header__navbar-language-icon fas fa-check" />}

      </a>
    </li>
  )
}
function LanguageMoney(props){
  return(
    <li className="header__navbar-language-item">
      <a href="" className="header__navbar-language-link">
        <span className="header__navbar-language-money">{props.money}</span>
        {props.moneyName}
        {props.money == 'VND' &&  <i className="header__navbar-language-icon fas fa-check" />}
       
      </a>
    </li>
  )
}


function HeaderNavbar(){
    return(
        <div className="header__navbar hide-on-MT">
  <ul className="header__navbar-list">
    {/* <li className="header__navbar-item">
      <a href="" className="header__navbar-link">
        Guide
      </a>
    </li> */}
    <NavbarItem Title = "Guide"/>
    <NavbarItem Title = "Host"/>
    <NavbarItem Title = "Đăng ký"/>
    <NavbarItem Title = "Đăng nhập"/>
    <li className="header__navbar-item header__navbar-language">
      <label
        htmlFor="header__navbar-language-checkbox"
        href=""
        className="header__navbar-link"
      >
        <img
          // src="../../assets/img/vietnam.png"
          src={vietnamImage}
          alt=""
          className="header__navbar-img"
        />
        <span className="header__navbar-country">VN</span>
        <i className="header__navbar-icon fas fa-caret-down" />
      </label>
      {/* <label
        htmlFor="header__navbar-language-checkbox"
        className="header__navbar-language-overlay"
      /> */}
      <input
        type="checkbox"
        hidden=""
        id="header__navbar-language-checkbox"
        className="header__navbar-language-checkboxed"
      />
      <div className="header__navbar-language-active">
        <div className="header__navbar-language-content">
          <ul className="header__navbar-language-list">
            <LanguageItem link={vietnamlogo} languageName="Tiếng Việt"/>
            <LanguageItem link={english} languageName="English"/>
            <LanguageItem link={korean} languageName="Korean"/>
            
          </ul>
          <ul className="header__navbar-language-list header__navbar-language-list-bonus">
            <LanguageMoney money='VND' moneyName='Việt Nam Đồng'/>
            <LanguageMoney money='USD' moneyName='United States Dollar'/>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</div>

    )
}

export default HeaderNavbar;