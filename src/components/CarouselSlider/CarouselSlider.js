import React from 'react'

import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';
import './CarouselSlider.css'

class CarouselSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    const { sources } = this.props;
    // let sources = [
    //   {
    //     original: 'http://skydoor.com.vn/images/slide/cua-luoi-chong-muoi-1.jpg',
    //     thumbnail: 'http://skydoor.com.vn/images/slide/cua-luoi-chong-muoi-1.jpg',
    //     originalAlt: 'Anh slide 1'
    //   },
    //   {
    //     original: 'http://skydoor.com.vn/images/slide/cua-luoi-chong-muoi-2.jpg',
    //     thumbnail: 'http://skydoor.com.vn/images/slide/cua-luoi-chong-muoi-2.jpg',
    //     originalAlt: 'Anh slide 2'
    //   },
    //   {
    //     original: 'http://skydoor.com.vn/images/slide/cua-luoi-chong-muoi-3.jpg',
    //     thumbnail: 'http://skydoor.com.vn/images/slide/cua-luoi-chong-muoi-3.jpg',
    //     originalAlt: 'Anh slide 3'
    //   }
    // ]


    const settings = {
      autoPlay: true,
      showThumbnails: false,
      showBullets: true,
      showFullscreenButton: false,
      slideInterval: 2000,
      lazyLoad: true
    };

    return (
      <div className="slider">
        <ImageGallery
          items={sources}
          {...settings}
        />
      </div>
    )
  }
}

export default CarouselSlider