import '../../assets/css/base.css'
import '../../assets/css/main.css'
import '../../assets/css/grid.css'
import '../../assets/css/responsive.css'
import '../../assets/fonts/fontawesome-free-5.15.4-web/css/all.min.css'

function HeaderSearch(){
    return(
      <div className="header-with-search">
    <a href="" className="header__logo hide-on-M">
      <svg
        version="1.1"
        viewBox="0 0 50 50"
        className="svg-icon svg-fill"
        style={{ width: 50, height: 50 }}
      >
        <path
          pid={0}
          d="M25.093 0c13.781.06 24.94 11.317 24.882 25.106C49.917 38.894 38.663 50.058 24.88 50 11.1 49.942-.059 38.683.001 24.894.057 11.106 11.31-.058 25.092 0zm11.801 31.9L14.398 16.053c.241-.26.48-.518.74-.777 2.7-2.687 5.971-4.031 9.775-4.015 3.804.015 7.064 1.388 9.741 4.098.238.241.476.482.694.743l-5.951 4.133 2.381 1.688 5.153-3.576v.02L39.33 16.7c-.692-1.203-1.584-2.325-2.616-3.39-3.231-3.292-7.167-4.947-11.788-4.967-4.6-.019-8.53 1.603-11.809 4.867a17.806 17.806 0 00-2.682 3.408l1.429 1.004 23.429 16.51c-.24.26-.48.518-.74.777-2.7 2.687-5.971 4.011-9.775 3.996-3.803-.016-7.063-1.37-9.74-4.08-.258-.26-.496-.521-.734-.782l6.111-4.251-.139-.181-2.183-1.528-5.373 3.735v-.021l-2.377 1.65a17.824 17.824 0 002.654 3.43c3.253 3.291 7.169 4.946 11.769 4.965 4.62.021 8.549-1.602 11.83-4.866 1.06-1.075 1.96-2.21 2.682-3.406l-2.383-1.67z"
        />
      </svg>
      {/* <svg version="1.1" viewBox="0 0 50 50" class="header__logo-img" style="width: 50px; height: 50px;">
                            <path
                                pid="0"
                                d="M25.093 0c13.781.06 24.94 11.317 24.882 25.106C49.917 38.894 38.663 50.058 24.88 50 11.1 49.942-.059 38.683.001 24.894.057 11.106 11.31-.058 25.092 0zm11.801 31.9L14.398 16.053c.241-.26.48-.518.74-.777 2.7-2.687 5.971-4.031 9.775-4.015 3.804.015 7.064 1.388 9.741 4.098.238.241.476.482.694.743l-5.951 4.133 2.381 1.688 5.153-3.576v.02L39.33 16.7c-.692-1.203-1.584-2.325-2.616-3.39-3.231-3.292-7.167-4.947-11.788-4.967-4.6-.019-8.53 1.603-11.809 4.867a17.806 17.806 0 00-2.682 3.408l1.429 1.004 23.429 16.51c-.24.26-.48.518-.74.777-2.7 2.687-5.971 4.011-9.775 3.996-3.803-.016-7.063-1.37-9.74-4.08-.258-.26-.496-.521-.734-.782l6.111-4.251-.139-.181-2.183-1.528-5.373 3.735v-.021l-2.377 1.65a17.824 17.824 0 002.654 3.43c3.253 3.291 7.169 4.946 11.769 4.965 4.62.021 8.549-1.602 11.83-4.866 1.06-1.075 1.96-2.21 2.682-3.406l-2.383-1.67z"
                            ></path>
                        </svg> */}
    </a>
    <div className="header__search">
      <span className="header__search-icon">
        <i className="fas fa-search" />
      </span>
      <input
        className="header__search-search"
        placeholder="Tìm kiếm"
        type="text"
      />
      <div className="header__search-date hide-on-M">
        <i className="header__search-date-icon far fa-calendar" />
        <span>Ngày</span>
      </div>
      <div className="header__search-quantity hide-on-M">
        <i className="header__search-quantity-icon fas fa-user-alt" />
        <span>Số khách</span>
      </div>
      <div className="header__search-input hide-on-M">
        <i className="header__search-input-icon fas fa-search" />
      </div>
    </div>
  </div>
  
    )
  }

  export default HeaderSearch;