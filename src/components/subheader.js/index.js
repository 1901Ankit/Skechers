import React from 'react'
import FooterList from '../footer/footerlist'
const Subheader = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-sm-3">
            <img src={props.image1 || ''} width="100%" height={props.height1} />
          </div>
          <div className="col-sm-6 ">
            <div className="row">
              <div className="col-sm-4">
                <FooterList
                  data={props.data}
                  heading={props.heading}
                  fs="11px"
                  fweight="700"
                  fontsize="13px"
                  marginbottom={props.mb1}
                />
              </div>
              <div className="col-sm-4">
                {props.data2 ? (
                  <FooterList
                    data={props.data2 || ''}
                    heading={props.heading2 || ''}
                    fweight="700"
                    fontsize="13px"
                    fs="11px"
                    marginbottom={props.mb2}
                  />
                ) : (
                  <div></div>
                )}
              </div>
              <div className="col-sm-4">
                {props.data3 ? (
                  <FooterList
                    data={props.data3 || ''}
                    heading={props.heading3 || ''}
                    fweight="700"
                    fontsize="15px"
                    fs="11px"
                    marginbottom={props.mb3}
                  />
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <img src={props.image2 || ''} width="100%" height={props.height2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subheader
