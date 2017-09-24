import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'

import './Header.css'

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      menuShow: false
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
    const { menuShow } = this.state;

    return (
			<header>
        <div className="top-header">
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
              <a href="tel: 0123456789" className="social-item hotline hidden-xs">
                <i className="fa fa-phone"></i>  &nbsp;Hotline: 0123456789
              </a>
            </div>
          </div>
        </div>
        <div className="logo-banner hidden-xs">
          <div className="container">
            <a className="logo" href="/">
              <i className="logo-image"/>
            </a>
            <div className="banner-top">
              <span className="banner-item shipping-quickly">
                <i className="fa fa-truck"/>
                <div className="text-inline">
                  <label style={{color: '#F7972B'}}>Uy tín chất lượng</label><br/>
                  <label>Ship hàng 24h</label>
                </div>
              </span>
              <span className="banner-item order-online">
                <i className="fa fa-mobile"/>
                <div className="text-inline">
                  <label style={{color: '#F7972B'}}>Đặt hàng online</label><br/>
                  <label>dễ dàng trên hệ thống</label>
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
        <nav className={`header-menu ${menuShow ? 'toggle' : 'collapse'}`}>
          <div className="container">
            <ul className="nav navbar">
              <li className={ pathname==='/' ? 'active' : null} onClick={this.navToPage}>
                <Link to='/'>Trang chủ</Link>
              </li>
              <li className={ pathname==='/gioi-thieu' ? 'active' : null} onClick={this.navToPage}>
                <Link to='/about'>Giới thiệu</Link>
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
