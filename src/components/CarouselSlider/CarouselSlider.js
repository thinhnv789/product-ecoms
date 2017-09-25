import React from 'react'

import Slider from 'react-slick'

import './CarouselSlider.css'

class CarouselSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    // const { src } = this.props;
    let sources = [
      {
        src: 'https://www.ific.ca/wp-content/uploads/2017/06/IFIC-Website-New-Investor-Centre-Carousel-Image.jpg',
        alt: 'anhr 1'
      },
      {
        src: 'https://d1yupijb0jmhpf.cloudfront.net/mobilem8-php/wp-content/uploads/2017/08/AW_Carousel-ImSukJai-Desktop_1000x360Pixels_En_ol_opt.jpg',
        alt: 'anhr 2'
      },
      {
        src: 'http://www.tireformula.com/assets/files/images/carousel/car-1.png',
        alt: 'anhr 3'
      },
      {
        src: 'http://www.musicvaultz.com/files/2016/12/CarouselUnit-1100.jpg',
        alt: 'anhr 4'
      },
      {
        src: 'http://mentorumc.org/images/uploads/carousel_images/Amazon_Smile_Carousel.jpg',
        alt: 'anhr 5'
      },
      {
        src: 'https://www.zigpress.com/wp-content/uploads/123rf-49462154-carousel-gear.jpg',
        alt: 'anhr 6'
      }
    ]


    const settings = {
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true
    };

    return (
      <div className="slider">
        <Slider {...settings}>
          {
            sources.map((item, index) => {
              return (
                <div key={index} className="slide-item">
                  <img className="img img-responsive" src={item.src} alt={item.alt} style={{width: '100%'}}/>
                </div>
              )
            })
          }
        </Slider>
      </div>
    )
  }
}

export default CarouselSlider