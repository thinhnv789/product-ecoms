import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'

import './Header.css'

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      menuShow: false,
      menuFixTop: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    event.preventDefault();

    const { menuFixTop } = this.state;
    let scrollTop = document.scrollingElement.scrollTop,
      topHeaderHeight = this.topHeader.clientHeight, topBannerHeight = this.topBanner.clientHeight;
    
    if (menuFixTop && scrollTop < (topHeaderHeight + topBannerHeight)) {
      this.setState({
        menuFixTop: false
      })
    }
    if (!menuFixTop && scrollTop >= (topHeaderHeight + topBannerHeight)) {
      console.log('abcd');
      this.setState({
        menuFixTop: true
      })
    }
  }

  setToggleMenu = () => {
    this.setState({
      menuShow: !this.state.menuShow
    })
  }

  navToPage = () => {
    this.setState({
      menuShow: false
    })
  }
  
  render () {
    const { pathname } = this.props.location;
    const { menuShow, menuFixTop } = this.state;

    return (
			<header>
        <div
          ref={topHeader => this.topHeader = topHeader}
          className="top-header">
          <div className="container">
            <button className="navbar-toggle" onClick={this.setToggleMenu}>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="header-socials">
              <a href="/facebook" className="social-item facebook">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="/g+" className="social-item gplus">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="/youtube" className="social-item youtube">
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          ref={topBanner => this.topBanner = topBanner} 
          className="logo-banner hidden-xs">
          <div className="container">
            <a className="logo" href="/">
              <i className="logo-image"/>
            </a>
            <div className="banner-top">
              <span className="banner-item order-online">
                <i className="fa fa-phone"/>
                <div className="text-inline">
                  <label style={{color: '#000'}}>Liên hệ:</label><br/>
                  <label>0123456789</label>
                </div>
              </span>

              <span className="banner-item shipping-quickly">
                <i className="fa fa-map-marker"/>
                <div className="text-inline">
                  <label style={{color: '#000'}}>Địa chỉ:</label><br/>
                  <address>144 Xuân Thủy, Cầu Giấy, Hà Nội</address>
                </div>
              </span>

              <a href="/cart" className="cart pull-right">
                <i className="fa fa-cart-arrow-down"/>
                <span className="cart-items">GIỎ HÀNG</span>
                <span className="count-items">0</span>
              </a>
            </div>
          </div>
        </div>
        <nav
          ref={menu => this.menu = menu}
          className={`header-menu ${menuFixTop ? 'fix-top' : ''} ${menuShow ? 'toggle' : 'collapse'}`}>
          <div className="container">
            <ul className="nav navbar">
              <li className={ pathname==='/' ? 'active' : null} onClick={this.navToPage}>
                <Link to='/'>Trang chủ</Link>
              </li>
              <li className={ pathname==='/gioi-thieu' ? 'active' : null} onClick={this.navToPage}>
                <Link to='/gioi-thieu'>Giới thiệu</Link>
              </li>
              <li className={ pathname==='/san-pham' ? 'active' : null} onClick={this.navToPage}>
                <Link to='/san-pham'>Sản phẩm</Link>
              </li>
              <li className={ pathname==='/tin-tuc' ? 'active' : null} onClick={this.navToPage}>
                <Link to='/tin-tuc'>Tin tức</Link>
              </li>
            </ul>
          </div>
        </nav>
        {
          menuShow && <div className="shadow-layer" />
        }
			</header>
    )
  }
}

export default withRouter(Header)
