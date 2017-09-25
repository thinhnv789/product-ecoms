import React from 'react'

import OwlCarousel from 'react-owl-carousel'

import './Slider.css'

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    // const { src } = this.props;
    let sources = [
      {
        src: 'http://thinhnv.esy.es/uploads/images-slider/image1.jpg',
        alt: 'anhr 1'
      },
      {
        src: 'http://thinhnv.esy.es/uploads/images-slider/image2.jpg',
        alt: 'anhr 1'
      },
      {
        src: 'http://thinhnv.esy.es/uploads/images-slider/image1.jpg',
        alt: 'anhr 1'
      },
      {
        src: 'http://thinhnv.esy.es/uploads/images-slider/image2.jpg',
        alt: 'anhr 1'
      },
      {
        src: 'http://thinhnv.esy.es/uploads/images-slider/image1.jpg',
        alt: 'anhr 1'
      }
    ]

    return (
      <div className="slider">
        <OwlCarousel
          className="owl-theme"
          items={1}
          loop
          autoplay={true}
          lazyLoad={true}
          lazyContent={true}
          autoplaySpeed={600}
          autoplayHoverPause={true}
          margin={0}
          autoplayTimeout={3000}
        >
          {
            sources.map((item, index) => {
              return (
                <div class="item">
                  <img className="img img-responsive" src={item.src} alt={item.alt} style={{width: '100%'}}/>
                </div>
              )
            })
          }
        </OwlCarousel>
      </div>
    )
  }
}

export default Slider