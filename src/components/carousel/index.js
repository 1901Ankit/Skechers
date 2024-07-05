import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Button from '../button'

const Carousels = (props) => {
  return (
    <div
      className={props.classname || ''}
      style={{
        width: props.divw || '',
        border: props.Border || '',
        marginBottom: props.mb || '',
      }}
    >
      <Carousel
        showThumbs={props.thumbs}
        infiniteLoop={true}
        autoPlay={props.autoplay}
        interval={2000}
        showStatus={props.status}
        showArrows={props.arrows}
        showIndicators={props.indicators || ''}
        centerMode={props.centermode || ''}
        centerSlidePercentage={props.centerslidepercentage || ''}
        renderArrowNext={props.renderArrowNext}
        renderArrowPrev={props.renderArrowPrev}
        stopOnHover={props.pauseonhover || ''}
      >
        {props.data.map((val, id) => {
          return (
            <div
              style={{
                backgroundImage: `url(${val.img})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: props.bgheight || '',
                display: props.display || '',
                placeItems: props.placeitems || '',
                alignItems: props.alignitems || '',
                maxWidth: props.maxwidth || '',
                border: props.border || '',
                borderRight: props.borderr || '',
                borderLeft: props.borderl || '',
                marginTop: props.mtop || '',
                paddingTop: props.ptop || '',
              }}
              className={props.class}
            >
              <div className="container">
                <div className="row">
                  <div
                    className="col-sm-12"
                    style={{
                      textAlign: props.textalign,
                      marginBottom: props.marginbottom,
                    }}
                  >
                    <Button
                      backgroundColor={props.bgcolor}
                      padding={props.padding}
                      color={props.color}
                      width={props.width}
                      onClick={props.onclick}
                      height={props.height}
                      classname={props.className}
                      transform={props.transform}
                      marginleft={props.marginleft}
                      border={props.border}
                    >
                      {val.button}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Carousels
