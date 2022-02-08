import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Clock from "./Clock";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;



class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );

      
  }
}

export default class Responsive extends Component {
  constructor(props) {
      super(props);
      this.state = { deadline: "January, 10, 2022", deadline1: "February, 10, 2022", deadline2: "February, 1, 2022", height: 0 };
      this.onImgLoad = this.onImgLoad.bind(this);
    }

  onImgLoad({target:img}) {
        let currentHeight = this.state.height;
        if(currentHeight < img.offsetHeight) {
            this.setState({
                height: img.offsetHeight
            })
        }
    }

  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: 300,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };

    return (
        <div className='nft'>
          <Slider {...settings}>
            <CustomSlide className='itm' index={1}>
            <div className="d-item">
              <div className="nft__item">
                  
                  
                  <div className="nft__item_wrap" style={{height: `${this.state.height}px`}}>
                    <Outer>
                      <span>
                          <img src="./img/items/static-1.jpg" className="lazy nft__item_preview" onLoad={this.onImgLoad} alt=""/>
                      </span>
                    </Outer>
                  </div>
                  <div className="nft__item_info">
                      <span onClick={()=> window.open("/ItemDetail", "_self")}>
                          <h4>UX Omnia</h4>
                      </span>
                      <div className="nft__item_price">
                          3 Matic<span>100/100 Available</span>
                      </div>
                      <div className="nft__item_action">
                          <span onClick={()=> window.open("/explore2", "_self")}>Buy</span>
                      </div>
                      <div className="nft__item_like">
                          <i className="fa fa-check"></i><span></span>
                      </div>                            
                  </div> 
              </div>
            </div>
            </CustomSlide>
            <CustomSlide className='itm' index={2}>
            <div className="d-item">
              <div className="nft__item">
                  
                  
                  <div className="nft__item_wrap" style={{height: `${this.state.height}px`}}>
                    <Outer>
                      <span>
                          <img src="./img/items/static-3.jpg" className="lazy nft__item_preview" onLoad={this.onImgLoad} alt=""/>
                      </span>
                    </Outer>
                  </div>
                  <div className="nft__item_info">
                      <span onClick={()=> window.open("/#", "_self")}>
                          <h4>Next Graphico</h4>
                      </span>
                      <div className="nft__item_price">
                          5 Matic<span>100/100 Available</span>
                      </div>
                      <div className="nft__item_action">
                          <span onClick={()=> window.open("/explore2", "_self")}>Buy</span>
                      </div>
                      <div className="nft__item_like">
                          <i className="fa fa-check"></i><span></span>
                      </div>                            
                  </div> 
              </div>
            </div>
            </CustomSlide>
            <CustomSlide className='itm' index={3}>
            <div className="d-item">
              <div className="nft__item">
                  
                  
                  <div className="nft__item_wrap" style={{height: `${this.state.height}px`}}>
                    <Outer>
                      <span>
                          <img src="./img/items/static-4.jpg" className="lazy nft__item_preview" onLoad={this.onImgLoad} alt=""/>
                      </span>
                    </Outer>
                  </div>
                  <div className="nft__item_info">
                      <span onClick={()=> window.open("/#", "_self")}>
                          <h4>SQL Alpha</h4>
                      </span>
                      <div className="nft__item_price">
                          4 Matic<span>100/100 Available</span>
                      </div>
                      <div className="nft__item_action">
                          <span onClick={()=> window.open("/explore2", "_self")}>Buy</span>
                      </div>
                      <div className="nft__item_like">
                          <i className="fa fa-check"></i><span></span>
                      </div>                            
                  </div> 
              </div>
            </div>
            </CustomSlide>
            <CustomSlide className='itm' index={4}>
            <div className="d-item">
              <div className="nft__item">
                  
                  
                  <div className="nft__item_wrap" style={{height: `${this.state.height}px`}}>
                    <Outer>
                      <span>
                          <img src="./img/items/static-6.jpg" className="lazy nft__item_preview" onLoad={this.onImgLoad} alt=""/>
                      </span>
                    </Outer>
                  </div>
                  <div className="nft__item_info">
                      <span onClick={()=> window.open("/#", "_self")}>
                          <h4>Alys Python</h4>
                      </span>
                      <div className="nft__item_price">
                          5 Matic<span>100/100 Available</span>
                      </div>
                      <div className="nft__item_action">
                          <span onClick={()=> window.open("/explore2", "_self")}>Buy</span>
                      </div>
                      <div className="nft__item_like">
                          <i className="fa fa-check"></i><span></span>
                      </div>                            
                  </div> 
              </div>
            </div>
            </CustomSlide>
            <CustomSlide className='itm' index={5}>
            <div className="d-item">
              <div className="nft__item">
                  
                  
                  <div className="nft__item_wrap" style={{height: `${this.state.height}px`}}>
                    <Outer>
                      <span>
                          <img src="./img/items/static-5.jpg" className="lazy nft__item_preview" onLoad={this.onImgLoad} alt=""/>
                      </span>
                    </Outer>
                  </div>
                  <div className="nft__item_info">
                      <span onClick={()=> window.open("/#", "_self")}>
                          <h4>UI Spiro</h4>
                      </span>
                      <div className="nft__item_price">
                          6 Matic<span>100/100 Available</span>
                      </div>
                      <div className="nft__item_action">
                          <span onClick={()=> window.open("/explore2", "_self")}>Buy</span>
                      </div>
                      <div className="nft__item_like">
                          <i className="fa fa-check"></i><span></span>
                      </div>                            
                  </div> 
              </div>
            </div>
            </CustomSlide>
            
          </Slider>
        </div>
    );
  }
}
